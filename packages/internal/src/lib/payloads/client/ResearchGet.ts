import type { Research } from '../../id.js';
import { BasePlanetPayloadOffset, PayloadType, readPlanetPayload, writePlanetPayload, type BasePlanetPayload } from './base.js';

export interface ResearchGetPayload extends BasePlanetPayload<PayloadType.ResearchGet> {
	readonly research: Research;
}

export function readResearchGet(buffer: Buffer): ResearchGetPayload {
	return {
		...readPlanetPayload(buffer),
		research: buffer.readUInt8(BasePlanetPayloadOffset) as Research
	};
}

export function writeResearchGet(data: Omit<ResearchGetPayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(BasePlanetPayloadOffset + 1);
	writePlanetPayload(buffer, PayloadType.ResearchGet, data);
	buffer.writeUInt8(data.research, BasePlanetPayloadOffset);
	return buffer;
}
