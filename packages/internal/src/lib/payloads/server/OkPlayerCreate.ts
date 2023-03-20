import { PayloadType, type BasePayload } from './base.js';

export interface OkPlayerCreatePayload extends BasePayload<PayloadType.OkPlayerCreate> {
	readonly planetId: number;
}

export function readOkPlayerCreate(buffer: Buffer): OkPlayerCreatePayload {
	return { type: PayloadType.OkPlayerCreate, planetId: buffer.readUInt32LE(1) };
}

export function writeOkPlayerCreate(data: Omit<OkPlayerCreatePayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(5);
	buffer.writeUInt8(PayloadType.OkPlayerCreate, 0);
	buffer.writeUInt32LE(data.planetId, 1);
	return buffer;
}
