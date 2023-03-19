import type { ErrorPayload } from './server/Error';
import type { OkPayload } from './server/Ok';

export * from './server/base';
export * from './server/Error.js';
export * from './server/Ok.js';

export type Payload = ErrorPayload | OkPayload;
