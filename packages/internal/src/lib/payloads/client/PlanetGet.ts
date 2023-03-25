import { BasePlanetPayloadOffset, PayloadType, readPlanetPayload, writePlanetPayload, type BasePlanetPayload } from './base.js';

export interface PlanetGetPayload extends BasePlanetPayload<PayloadType.PlanetGet> {}

export function readPlanetGet(buffer: Buffer): PlanetGetPayload {
	return readPlanetPayload(buffer);
}

export function writePlanetGet(data: Omit<PlanetGetPayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(BasePlanetPayloadOffset);
	writePlanetPayload(buffer, PayloadType.PlanetGet, data);
	return buffer;
}
