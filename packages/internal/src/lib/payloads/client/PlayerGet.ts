import { BasePayloadOffset, PayloadType, writeType, type BasePayload } from './base.js';

export interface PlayerGetPayload extends BasePayload<PayloadType.PlayerGet> {
	readonly universeId: bigint;
}

export function readPlayerGet(buffer: Buffer): PlayerGetPayload {
	return {
		type: PayloadType.PlayerGet,
		universeId: buffer.readBigUInt64LE(BasePayloadOffset)
	};
}

export function writePlayerGet(data: Omit<PlayerGetPayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(BasePayloadOffset + 8);
	writeType(buffer, PayloadType.PlayerGet);
	buffer.writeBigUInt64LE(data.universeId, BasePayloadOffset);
	return buffer;
}
