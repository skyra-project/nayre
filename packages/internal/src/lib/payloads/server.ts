import type { ErrorPayload } from './server/Error.js';
import type { OkPayload } from './server/Ok.js';
import type { OkGetPlanetPayload } from './server/OkGetPlanet.js';
import type { OkGetPlayerPayload } from './server/OkGetPlayer.js';
import type { OkGetPlayersPayload } from './server/OkGetPlayers.js';

export * from './server/base.js';
export * from './server/Error.js';
export * from './server/Ok.js';
export * from './server/OkGetPlanet.js';
export * from './server/OkGetPlayer.js';
export * from './server/OkGetPlayers.js';

export type Payload =
	| OkPayload //
	| OkGetPlayerPayload
	| OkGetPlayersPayload
	| OkGetPlanetPayload
	| ErrorPayload;
