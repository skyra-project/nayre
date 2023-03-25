import { PayloadType, writeType, type BasePayload } from './base.js';

export interface UniverseCreatePayload extends BasePayload<PayloadType.UniverseCreate> {
	id: bigint;
	systems: number;
	name: string;
}

export function readUniverseCreate(buffer: Buffer): UniverseCreatePayload {
	const decoder = new TextDecoder();
	return {
		type: PayloadType.UniverseCreate,
		id: buffer.readBigUInt64LE(1),
		systems: buffer.readUInt16LE(9),
		name: decoder.decode(buffer.subarray(11))
	};
}

export function writeUniverseCreate(data: Omit<UniverseCreatePayload, 'type'>): Buffer {
	const encoder = new TextEncoder();
	const name = encoder.encode(data.name);
	const buffer = Buffer.allocUnsafe(11 + name.byteLength);
	writeType(buffer, PayloadType.UniverseCreate);
	buffer.writeBigUInt64LE(data.id, 1);
	buffer.writeUInt16LE(data.systems, 9);
	buffer.set(name, 11);
	return buffer;
}
