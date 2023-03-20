import { BasePayloadOffset, PayloadType, writeType, type BasePayload } from './base.js';

export interface PlayerCreatePayload extends BasePayload<PayloadType.PlayerCreate> {
	readonly universeId: bigint;
}

export function readPlayerCreate(buffer: Buffer): PlayerCreatePayload {
	return {
		type: PayloadType.PlayerCreate,
		universeId: buffer.readBigUInt64LE(BasePayloadOffset)
	};
}

export function writePlayerCreate(data: Omit<PlayerCreatePayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(BasePayloadOffset + 8);
	writeType(buffer, PayloadType.PlayerCreate);
	buffer.writeBigUInt64LE(data.universeId, BasePayloadOffset);
	return buffer;
}
