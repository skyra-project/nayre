import { PayloadType, type BasePayload } from './base.js';

export interface GetAllPayload extends BasePayload<PayloadType.GetAll> {}

export function readGetAll(): GetAllPayload {
	return { type: PayloadType.GetAll };
}

export function writeGetAll(): Buffer {
	const buffer = Buffer.allocUnsafe(1);
	buffer.writeUInt8(PayloadType.CancelBuildingUpgrade, 0);
	return buffer;
}
