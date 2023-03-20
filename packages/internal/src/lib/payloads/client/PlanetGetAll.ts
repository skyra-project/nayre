import { BasePayloadOffset, PayloadType, writeType, type BasePayload } from './base.js';

export interface PlanetGetAllPayload extends BasePayload<PayloadType.PlanetGetAll> {
	readonly universeId: bigint;
}

export function readPlanetGetAll(buffer: Buffer): PlanetGetAllPayload {
	return {
		type: PayloadType.PlanetGetAll,
		universeId: buffer.readBigUInt64LE(BasePayloadOffset)
	};
}

export function writePlanetGetAll(data: Omit<PlanetGetAllPayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(BasePayloadOffset + 8);
	writeType(buffer, PayloadType.PlanetGetAll);
	buffer.writeBigUInt64LE(data.universeId, BasePayloadOffset);
	return buffer;
}
