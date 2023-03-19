import type { CancelBuildingUpgradePayload } from './client/CancelBuildingUpgrade.js';
import type { GetPlanetPayload } from './client/GetPlanet.js';
import type { GetPlayerPayload } from './client/GetPlayer.js';
import type { GetPlayersPayload } from './client/GetPlayers.js';
import type { StartBuildingUpgradePayload } from './client/StartBuildingUpgrade.js';

export * from './client/base.js';
export * from './client/CancelBuildingUpgrade.js';
export * from './client/GetPlanet.js';
export * from './client/GetPlayer.js';
export * from './client/GetPlayers.js';
export * from './client/StartBuildingUpgrade.js';

export type Payload =
	| CancelBuildingUpgradePayload //
	| GetPlayerPayload
	| GetPlayersPayload
	| GetPlanetPayload
	| StartBuildingUpgradePayload;
