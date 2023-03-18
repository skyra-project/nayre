import { PayloadType, type BasePayload } from './base.js';

export enum ErrorCode {
	NotEnoughResources
}

export interface ErrorPayload extends BasePayload<PayloadType.Error> {
	readonly code: ErrorCode;
}

export function readError(buffer: Buffer): ErrorPayload {
	return {
		type: PayloadType.Error,
		code: buffer.readUInt8(1)
	};
}

export function writeError(data: Omit<ErrorPayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(1);
	buffer.writeUInt8(PayloadType.Error, 0);
	buffer.writeUInt8(data.code, 1);
	return buffer;
}
