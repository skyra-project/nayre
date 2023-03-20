import type { Research } from '../../id.js';
import { BasePlanetPayloadOffset, PayloadType, readPlanetPayload, writePlanetPayload, type BasePlanetPayload } from './base.js';

export interface ResearchUpgradeQueuePayload extends BasePlanetPayload<PayloadType.ResearchUpgradeQueue> {
	readonly building: Research;
}

export function readResearchUpgradeQueue(buffer: Buffer): ResearchUpgradeQueuePayload {
	return {
		...readPlanetPayload(buffer),
		building: buffer.readUInt8(BasePlanetPayloadOffset) as Research
	};
}

export function writeResearchUpgradeQueue(data: Omit<ResearchUpgradeQueuePayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(BasePlanetPayloadOffset + 1);
	writePlanetPayload(buffer, PayloadType.ResearchUpgradeQueue, data);
	buffer.writeUInt8(data.building, BasePlanetPayloadOffset);
	return buffer;
}
