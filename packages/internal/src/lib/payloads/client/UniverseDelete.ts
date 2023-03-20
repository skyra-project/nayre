import { PayloadType, writeType, type BasePayload } from './base.js';

export interface UniverseDeletePayload extends BasePayload<PayloadType.UniverseDelete> {
	id: bigint;
}

export function readUniverseDelete(buffer: Buffer): UniverseDeletePayload {
	return { type: PayloadType.UniverseDelete, id: buffer.readBigUInt64LE(1) };
}

export function writeUniverseDelete(data: Omit<UniverseDeletePayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(9);
	writeType(buffer, PayloadType.UniverseDelete);
	buffer.writeBigUInt64LE(data.id, 1);
	return buffer;
}
