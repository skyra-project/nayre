import type { BuildingGetPayload } from './client/BuildingGet.js';
import type { BuildingGetAllPayload } from './client/BuildingGetAll.js';
import type { BuildingUpgradeAbortPayload } from './client/BuildingUpgradeAbort.js';
import type { BuildingUpgradeQueuePayload } from './client/BuildingUpgradeQueue.js';
import type { PlanetGetPayload } from './client/PlanetGet.js';
import type { PlanetGetAllPayload } from './client/PlanetGetAll.js';
import type { PlayerCreatePayload } from './client/PlayerCreate.js';
import type { PlayerDeletePayload } from './client/PlayerDelete.js';
import type { PlayerGetPayload } from './client/PlayerGet.js';
import type { PlayerGetAllPayload } from './client/PlayerGetAll.js';
import type { ResearchGetPayload } from './client/ResearchGet.js';
import type { ResearchGetAllPayload } from './client/ResearchGetAll.js';
import type { ResearchUpgradeAbortPayload } from './client/ResearchUpgradeAbort.js';
import type { ResearchUpgradeQueuePayload } from './client/ResearchUpgradeQueue.js';
import type { UniverseCreatePayload } from './client/UniverseCreate.js';
import type { UniverseDeletePayload } from './client/UniverseDelete.js';
import type { VehicleBuildAbortPayload } from './client/VehicleBuildAbort.js';
import type { VehicleBuildQueuePayload } from './client/VehicleBuildQueue.js';
import type { VehicleGetPayload } from './client/VehicleGet.js';
import type { VehicleGetAllPayload } from './client/VehicleGetAll.js';

export * from './client/base.js';
export * from './client/BuildingGet.js';
export * from './client/BuildingGetAll.js';
export * from './client/BuildingUpgradeAbort.js';
export * from './client/BuildingUpgradeQueue.js';
export * from './client/PlanetGet.js';
export * from './client/PlanetGetAll.js';
export * from './client/PlayerCreate.js';
export * from './client/PlayerDelete.js';
export * from './client/PlayerGet.js';
export * from './client/PlayerGetAll.js';
export * from './client/ResearchGet.js';
export * from './client/ResearchGetAll.js';
export * from './client/ResearchUpgradeAbort.js';
export * from './client/ResearchUpgradeQueue.js';
export * from './client/UniverseCreate.js';
export * from './client/UniverseDelete.js';
export * from './client/VehicleBuildAbort.js';
export * from './client/VehicleBuildQueue.js';
export * from './client/VehicleGet.js';
export * from './client/VehicleGetAll.js';

export type Payload =
	| BuildingGetPayload
	| BuildingGetAllPayload
	| BuildingUpgradeAbortPayload
	| BuildingUpgradeQueuePayload
	| PlanetGetPayload
	| PlanetGetAllPayload
	| PlayerCreatePayload
	| PlayerDeletePayload
	| PlayerGetPayload
	| PlayerGetAllPayload
	| ResearchGetPayload
	| ResearchGetAllPayload
	| ResearchUpgradeAbortPayload
	| ResearchUpgradeQueuePayload
	| UniverseCreatePayload
	| UniverseDeletePayload
	| VehicleBuildAbortPayload
	| VehicleBuildQueuePayload
	| VehicleGetPayload
	| VehicleGetAllPayload;
