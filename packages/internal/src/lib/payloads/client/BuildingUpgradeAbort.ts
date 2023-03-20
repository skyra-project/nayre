import type { Building } from '../../id.js';
import { BasePlanetPayloadOffset, PayloadType, readPlanetPayload, writePlanetPayload, type BasePlanetPayload } from './base.js';

export interface BuildingUpgradeAbortPayload extends BasePlanetPayload<PayloadType.BuildingUpgradeAbort> {
	readonly building: Building;
}

export function readBuildingUpgradeAbort(buffer: Buffer): BuildingUpgradeAbortPayload {
	return {
		...readPlanetPayload(buffer),
		building: buffer.readUInt8(BasePlanetPayloadOffset) as Building
	};
}

export function writeBuildingUpgradeAbort(data: Omit<BuildingUpgradeAbortPayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(BasePlanetPayloadOffset + 1);
	writePlanetPayload(buffer, PayloadType.BuildingUpgradeAbort, data);
	buffer.writeUInt8(data.building, BasePlanetPayloadOffset);
	return buffer;
}
