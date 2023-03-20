import type { Vehicle } from '../../id.js';
import { BasePlanetPayloadOffset, PayloadType, readPlanetPayload, writePlanetPayload, type BasePlanetPayload } from './base.js';

export interface VehicleBuildAbortPayload extends BasePlanetPayload<PayloadType.VehicleBuildAbort> {
	readonly vehicle: Vehicle;
}

export function readVehicleBuildAbort(buffer: Buffer): VehicleBuildAbortPayload {
	return {
		...readPlanetPayload(buffer),
		vehicle: buffer.readUInt8(BasePlanetPayloadOffset) as Vehicle
	};
}

export function writeVehicleBuildAbort(data: Omit<VehicleBuildAbortPayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(BasePlanetPayloadOffset + 1);
	writePlanetPayload(buffer, PayloadType.VehicleBuildAbort, data);
	buffer.writeUInt8(data.vehicle, BasePlanetPayloadOffset);
	return buffer;
}
