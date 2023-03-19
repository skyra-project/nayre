import type { CancelBuildingUpgradePayload } from './client/CancelBuildingUpgrade';
import type { GetAllPayload } from './client/GetAll';
import type { StartBuildingUpgradePayload } from './client/StartBuildingUpgrade';

export * from './client/base';
export * from './client/CancelBuildingUpgrade.js';
export * from './client/GetAll';
export * from './client/StartBuildingUpgrade.js';

export type Payload =
	| CancelBuildingUpgradePayload //
	| GetAllPayload
	| StartBuildingUpgradePayload;
