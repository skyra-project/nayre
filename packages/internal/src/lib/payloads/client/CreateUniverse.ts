import { PayloadType, type BasePayload } from './base.js';

export interface CreateUniversePayload extends BasePayload<PayloadType.CreateUniverse> {
	id: bigint;
}

export function readCreateUniverse(buffer: Buffer): CreateUniversePayload {
	return { type: PayloadType.CreateUniverse, id: buffer.readBigUInt64LE(1) };
}

export function writeCreateUniverse(data: Omit<CreateUniversePayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(9);
	buffer.writeUInt8(PayloadType.CreateUniverse, 0);
	buffer.writeBigUInt64LE(data.id, 1);
	return buffer;
}
