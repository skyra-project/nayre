import { BasePlanetPayloadOffset, PayloadType, readPlanetPayload, writePlanetPayload, type BasePlanetPayload } from './base.js';

export interface BuildingGetAllPayload extends BasePlanetPayload<PayloadType.BuildingGetAll> {}

export function readBuildingGetAll(buffer: Buffer): BuildingGetAllPayload {
	return readPlanetPayload(buffer);
}

export function writeBuildingGetAll(data: Omit<BuildingGetAllPayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(BasePlanetPayloadOffset);
	writePlanetPayload(buffer, PayloadType.BuildingGetAll, data);
	return buffer;
}
