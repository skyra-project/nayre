import type { ErrorPayload } from './server/Error.js';
import type { OkPayload } from './server/Ok.js';
import type { OkPlanetGetPayload } from './server/OkPlanetGet.js';
import type { OkPlanetGetAllPayload } from './server/OkPlanetGetAll.js';
import type { OkPlayerGetPayload } from './server/OkPlayerGet.js';
import type { OkPlayerGetAllPayload } from './server/OkPlayerGetAll.js';

export * from './server/base.js';
export * from './server/Error.js';
export * from './server/Ok.js';
export * from './server/OkPlanetGet.js';
export * from './server/OkPlanetGetAll.js';
export * from './server/OkPlayerGet.js';
export * from './server/OkPlayerGetAll.js';

export type Payload =
	| ErrorPayload //
	| OkPayload
	| OkPlanetGetPayload
	| OkPlanetGetAllPayload
	| OkPlayerGetPayload
	| OkPlayerGetAllPayload;
