import { PayloadType, writeType, type BasePayload } from './base.js';

export interface PlayerGetAllPayload extends BasePayload<PayloadType.PlayerGetAll> {}

export function readPlayerGetAll(): PlayerGetAllPayload {
	return { type: PayloadType.PlayerGetAll };
}

export function writePlayerGetAll(): Buffer {
	const buffer = Buffer.allocUnsafe(1);
	writeType(buffer, PayloadType.PlayerGetAll);
	return buffer;
}
