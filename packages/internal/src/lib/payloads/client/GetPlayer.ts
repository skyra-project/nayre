import { PayloadType, type BasePayload } from './base.js';

export interface GetPlayerPayload extends BasePayload<PayloadType.GetPlayer> {
	id: bigint;
}

export function readGetPlayer(buffer: Buffer): GetPlayerPayload {
	return { type: PayloadType.GetPlayer, id: buffer.readBigUInt64LE(1) };
}

export function writeGetPlayer(data: Omit<GetPlayerPayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(9);
	buffer.writeUInt8(PayloadType.GetPlayer, 0);
	buffer.writeBigUInt64LE(data.id, 1);
	return buffer;
}
