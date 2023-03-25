import { logger } from '#lib/logger';
import type { Awaitable } from '@sapphire/utilities';
import { Client } from '@skyra/internal';
import { cyan } from '@skyra/logger';
import { basename } from 'node:path';
import { fileURLToPath } from 'node:url';

export const Routes = new Map<Client.PayloadType, Route>();

export function registerRoute(url: string, route: Route) {
	const name = basename(fileURLToPath(new URL(url)), '.js') as keyof typeof Client.PayloadType;
	const key = Client.PayloadType[name];

	logger.debug(`Registered route ${cyan(name)} as ${key}`);
	Routes.set(key, route);
}

export interface Route {
	(userId: bigint, payload: Buffer): Awaitable<Buffer>;
}
