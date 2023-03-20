import type { Research } from '../../id.js';
import { BasePlanetPayloadOffset, PayloadType, readPlanetPayload, writePlanetPayload, type BasePlanetPayload } from './base.js';

export interface ResearchUpgradeAbortPayload extends BasePlanetPayload<PayloadType.ResearchUpgradeAbort> {
	readonly building: Research;
}

export function readResearchUpgradeAbort(buffer: Buffer): ResearchUpgradeAbortPayload {
	return {
		...readPlanetPayload(buffer),
		building: buffer.readUInt8(BasePlanetPayloadOffset) as Research
	};
}

export function writeResearchUpgradeAbort(data: Omit<ResearchUpgradeAbortPayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(BasePlanetPayloadOffset + 1);
	writePlanetPayload(buffer, PayloadType.ResearchUpgradeAbort, data);
	buffer.writeUInt8(data.building, BasePlanetPayloadOffset);
	return buffer;
}
