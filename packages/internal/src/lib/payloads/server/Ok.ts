import { PayloadType, type BasePayload } from './base.js';

export interface OkPayload extends BasePayload<PayloadType.Ok> {}

export function readOk(): OkPayload {
	return { type: PayloadType.Ok };
}

export function writeOk(): Buffer {
	const buffer = Buffer.allocUnsafe(1);
	buffer.writeUInt8(PayloadType.Ok, 0);
	return buffer;
}
