import { PayloadType, type BasePayload } from './base.js';

export interface DeleteUniversePayload extends BasePayload<PayloadType.DeleteUniverse> {
	id: bigint;
}

export function readDeleteUniverse(buffer: Buffer): DeleteUniversePayload {
	return { type: PayloadType.DeleteUniverse, id: buffer.readBigUInt64LE(1) };
}

export function writeDeleteUniverse(data: Omit<DeleteUniversePayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(9);
	buffer.writeUInt8(PayloadType.DeleteUniverse, 0);
	buffer.writeBigUInt64LE(data.id, 1);
	return buffer;
}
