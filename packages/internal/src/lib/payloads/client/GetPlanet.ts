import { PayloadType, type BasePayload } from './base.js';

export interface GetPlanetPayload extends BasePayload<PayloadType.GetPlanet> {
	id: bigint;
}

export function readGetPlanet(buffer: Buffer): GetPlanetPayload {
	return { type: PayloadType.GetPlanet, id: buffer.readBigUInt64LE(1) };
}

export function writeGetPlanet(data: Omit<GetPlanetPayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(9);
	buffer.writeUInt8(PayloadType.GetPlanet, 0);
	buffer.writeBigUInt64LE(data.id, 1);
	return buffer;
}
