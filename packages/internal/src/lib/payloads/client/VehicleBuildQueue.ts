import type { Vehicle } from '../../id.js';
import { BasePlanetPayloadOffset, PayloadType, readPlanetPayload, writePlanetPayload, type BasePlanetPayload } from './base.js';

export interface VehicleBuildQueuePayload extends BasePlanetPayload<PayloadType.VehicleBuildQueue> {
	readonly vehicle: Vehicle;
}

export function readVehicleBuildQueue(buffer: Buffer): VehicleBuildQueuePayload {
	return {
		...readPlanetPayload(buffer),
		vehicle: buffer.readUInt8(BasePlanetPayloadOffset) as Vehicle
	};
}

export function writeVehicleBuildQueue(data: Omit<VehicleBuildQueuePayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(BasePlanetPayloadOffset + 1);
	writePlanetPayload(buffer, PayloadType.VehicleBuildQueue, data);
	buffer.writeUInt8(data.vehicle, BasePlanetPayloadOffset);
	return buffer;
}
