import type { Building } from '../../id.js';
import { BasePlanetPayloadOffset, PayloadType, readPlanetPayload, writePlanetPayload, type BasePlanetPayload } from './base.js';

export interface BuildingGetPayload extends BasePlanetPayload<PayloadType.BuildingGet> {
	readonly building: Building;
}

export function readBuildingGet(buffer: Buffer): BuildingGetPayload {
	return {
		...readPlanetPayload(buffer),
		building: buffer.readUInt8(BasePlanetPayloadOffset) as Building
	};
}

export function writeBuildingGet(data: Omit<BuildingGetPayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(BasePlanetPayloadOffset + 1);
	writePlanetPayload(buffer, PayloadType.BuildingGet, data);
	buffer.writeUInt8(data.building, BasePlanetPayloadOffset);
	return buffer;
}
