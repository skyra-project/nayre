import type { Building } from '../../id.js';
import { BasePlanetPayloadOffset, PayloadType, readPlanetPayload, writePlanetPayload, type BasePlanetPayload } from './base.js';

export interface BuildingUpgradeQueuePayload extends BasePlanetPayload<PayloadType.BuildingUpgradeQueue> {
	readonly building: Building;
}

export function readBuildingUpgradeQueue(buffer: Buffer): BuildingUpgradeQueuePayload {
	return {
		...readPlanetPayload(buffer),
		building: buffer.readUInt8(BasePlanetPayloadOffset) as Building
	};
}

export function writeBuildingUpgradeQueue(data: Omit<BuildingUpgradeQueuePayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(BasePlanetPayloadOffset + 1);
	writePlanetPayload(buffer, PayloadType.BuildingUpgradeQueue, data);
	buffer.writeUInt8(data.building, BasePlanetPayloadOffset);
	return buffer;
}
