import { BasePlanetPayloadOffset, PayloadType, readPlanetPayload, writePlanetPayload, type BasePlanetPayload } from './base.js';

export interface ResearchGetAllPayload extends BasePlanetPayload<PayloadType.ResearchGetAll> {}

export function readResearchGetAll(buffer: Buffer): ResearchGetAllPayload {
	return readPlanetPayload(buffer);
}

export function writeResearchGetAll(data: Omit<ResearchGetAllPayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(BasePlanetPayloadOffset);
	writePlanetPayload(buffer, PayloadType.ResearchGetAll, data);
	return buffer;
}
