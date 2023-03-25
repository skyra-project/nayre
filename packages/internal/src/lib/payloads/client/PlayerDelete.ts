import { BasePayloadOffset, PayloadType, writeType, type BasePayload } from './base.js';

export interface PlayerDeletePayload extends BasePayload<PayloadType.PlayerDelete> {
	readonly universeId: bigint;
	readonly userId: bigint;
}

export function readPlayerDelete(buffer: Buffer): PlayerDeletePayload {
	return {
		type: PayloadType.PlayerDelete,
		universeId: buffer.readBigUInt64LE(BasePayloadOffset),
		userId: buffer.readBigUInt64LE(BasePayloadOffset + 8)
	};
}

export function writePlayerDelete(data: Omit<PlayerDeletePayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(BasePayloadOffset + 16);
	writeType(buffer, PayloadType.PlayerDelete);
	buffer.writeBigUInt64LE(data.universeId, BasePayloadOffset);
	buffer.writeBigUInt64LE(data.userId, BasePayloadOffset + 8);
	return buffer;
}
