import { BasePlanetPayloadOffset, PayloadType, readPlanetPayload, writePlanetPayload, type BasePlanetPayload } from './base.js';

export interface VehicleGetAllPayload extends BasePlanetPayload<PayloadType.VehicleGetAll> {}

export function readVehicleGetAll(buffer: Buffer): VehicleGetAllPayload {
	return readPlanetPayload(buffer);
}

export function writeVehicleGetAll(data: Omit<VehicleGetAllPayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(BasePlanetPayloadOffset);
	writePlanetPayload(buffer, PayloadType.VehicleGetAll, data);
	return buffer;
}
