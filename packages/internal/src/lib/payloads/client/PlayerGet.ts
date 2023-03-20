import { BasePayloadOffset, PayloadType, writeType, type BasePayload } from './base.js';

export interface PlayerGetPayload extends BasePayload<PayloadType.PlayerGet> {
	readonly universeId: bigint;
	readonly userId: bigint;
}

export function readPlayerGet(buffer: Buffer): PlayerGetPayload {
	return {
		type: PayloadType.PlayerGet,
		universeId: buffer.readBigUInt64LE(BasePayloadOffset),
		userId: buffer.readBigUInt64LE(BasePayloadOffset + 8)
	};
}

export function writePlayerGet(data: Omit<PlayerGetPayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(BasePayloadOffset + 16);
	writeType(buffer, PayloadType.PlayerGet);
	buffer.writeBigUInt64LE(data.universeId, BasePayloadOffset);
	buffer.writeBigUInt64LE(data.userId, BasePayloadOffset + 8);
	return buffer;
}
