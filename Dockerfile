# Base Stage

## Base config

FROM node:18-alpine as base

WORKDIR /usr/src/app

ENV YARN_DISABLE_GIT_HOOKS=1
ENV LOG_LEVEL=info
ENV FORCE_COLOR=true

RUN apk add --no-cache dumb-init

COPY --chown=node:node yarn.lock .
COPY --chown=node:node package.json .
COPY --chown=node:node .yarnrc.yml .
COPY --chown=node:node .yarn/ .yarn/

ENTRYPOINT ["dumb-init", "--"]

## Base Builder

FROM base as base-builder

ENV NODE_ENV="development"

COPY --chown=node:node tsconfig.base.json .
COPY --chown=node:node apps/acryss/package.json apps/acryss/package.json
COPY --chown=node:node apps/frontend/package.json apps/frontend/package.json
COPY --chown=node:node apps/nayre/package.json apps/nayre/package.json
COPY --chown=node:node packages/internal/package.json packages/internal/package.json

RUN yarn install --immutable

COPY --chown=node:node packages/internal/src/ packages/internal/src/

RUN yarn workspace @skyra/internal run build

## Base Runner

FROM base as base-runner

ENV NODE_ENV="production"
ENV NODE_OPTIONS="--enable-source-maps"

WORKDIR /usr/src/app

USER node

# Acryss

## Builder

FROM base-builder as acryss-builder

COPY --chown=node:node apps/acryss/prisma/ apps/acryss/prisma/
COPY --chown=node:node apps/acryss/src/ apps/acryss/src/

RUN yarn workspace @skyra/acryss run prisma:generate
RUN yarn workspace @skyra/acryss run build

## Runner

FROM base-runner as acryss-runner

COPY --chown=node:node --from=base-builder /usr/src/app/packages/internal/package.json /usr/src/app/packages/internal/package.json

COPY --chown=node:node --from=base-builder /usr/src/app/apps/acryss/package.json /usr/src/app/apps/acryss/package.json
COPY --chown=node:node --from=acryss-builder /usr/src/app/apps/acryss/dist apps/acryss/dist
COPY --chown=node:node --from=acryss-builder /usr/src/app/apps/acryss/src/.env apps/acryss/src/.env

USER root

RUN yarn workspaces focus @skyra/acryss --production
RUN chown node:node /usr/src/app/**

USER node

### Patch .prisma with the built files
COPY --chown=node:node --from=acryss-builder /usr/src/app/node_modules/.prisma /usr/src/app/node_modules/.prisma

CMD [ "yarn", "workspace", "@skyra/acryss", "run", "start" ]

# Frontend

## Builder

FROM base-builder as frontend-builder

COPY --chown=node:node apps/frontend/assets/ apps/frontend/assets/
COPY --chown=node:node apps/frontend/components/ apps/frontend/components/
COPY --chown=node:node apps/frontend/layouts/ apps/frontend/layouts/
COPY --chown=node:node apps/frontend/pages/ apps/frontend/pages/
COPY --chown=node:node apps/frontend/public/ apps/frontend/public/
COPY --chown=node:node apps/frontend/server/ apps/frontend/server/

COPY --chown=node:node apps/frontend/app.vue apps/frontend/app.vue
COPY --chown=node:node apps/frontend/nuxt.config.ts apps/frontend/nuxt.config.ts
COPY --chown=node:node apps/frontend/tailwind.config.ts apps/frontend/tailwind.config.ts
COPY --chown=node:node apps/frontend/tsconfig.json apps/frontend/tsconfig.json

RUN yarn workspace @skyra/nayre-web run build

## Runner

FROM base-runner as frontend-runner

COPY --chown=node:node --from=frontend-builder /usr/src/app/apps/frontend/.output/ .output/

USER root

RUN rm -rf .yarn .yarnrc.yml package.json yarn.lock

USER node

CMD [ "node", ".output/server/index.mjs" ]

# Nayre

## Builder

FROM base-builder as nayre-builder

COPY --chown=node:node apps/nayre/src/ apps/nayre/src/

RUN yarn workspace @skyra/nayre run build

## Runner

FROM base-runner as nayre-runner

COPY --chown=node:node --from=base-builder /usr/src/app/packages/internal/package.json /usr/src/app/packages/internal/package.json

COPY --chown=node:node --from=base-builder /usr/src/app/apps/nayre/package.json /usr/src/app/apps/nayre/package.json
COPY --chown=node:node --from=nayre-builder /usr/src/app/apps/nayre/dist apps/nayre/dist
COPY --chown=node:node --from=nayre-builder /usr/src/app/apps/nayre/src/locales apps/nayre/src/locales
COPY --chown=node:node --from=nayre-builder /usr/src/app/apps/nayre/src/.env apps/nayre/src/.env

USER root

RUN yarn workspaces focus @skyra/nayre --production
RUN chown node:node /usr/src/app/**

USER node

CMD [ "yarn", "workspace", "@skyra/nayre", "run", "start" ]
