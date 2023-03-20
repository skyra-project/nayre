import type { Vehicle } from '../../id.js';
import { BasePlanetPayloadOffset, PayloadType, readPlanetPayload, writePlanetPayload, type BasePlanetPayload } from './base.js';

export interface VehicleGetPayload extends BasePlanetPayload<PayloadType.VehicleGet> {
	readonly vehicle: Vehicle;
}

export function readVehicleGet(buffer: Buffer): VehicleGetPayload {
	return {
		...readPlanetPayload(buffer),
		vehicle: buffer.readUInt8(BasePlanetPayloadOffset) as Vehicle
	};
}

export function writeVehicleGet(data: Omit<VehicleGetPayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(BasePlanetPayloadOffset + 1);
	writePlanetPayload(buffer, PayloadType.VehicleGet, data);
	buffer.writeUInt8(data.vehicle, BasePlanetPayloadOffset);
	return buffer;
}
