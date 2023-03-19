import type { CancelBuildingUpgradePayload } from './client/CancelBuildingUpgrade.js';
import type { CreateUniversePayload } from './client/CreateUniverse.js';
import type { DeleteUniversePayload } from './client/DeleteUniverse.js';
import type { GetPlanetPayload } from './client/GetPlanet.js';
import type { GetPlayerPayload } from './client/GetPlayer.js';
import type { GetPlayersPayload } from './client/GetPlayers.js';
import type { StartBuildingUpgradePayload } from './client/StartBuildingUpgrade.js';

export * from './client/base.js';
export * from './client/CancelBuildingUpgrade.js';
export * from './client/CreateUniverse.js';
export * from './client/DeleteUniverse.js';
export * from './client/GetPlanet.js';
export * from './client/GetPlayer.js';
export * from './client/GetPlayers.js';
export * from './client/StartBuildingUpgrade.js';

export type Payload =
	| CancelBuildingUpgradePayload
	| CreateUniversePayload
	| DeleteUniversePayload
	| GetPlayerPayload
	| GetPlayersPayload
	| GetPlanetPayload
	| StartBuildingUpgradePayload;
