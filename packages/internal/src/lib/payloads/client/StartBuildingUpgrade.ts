import type { Building } from '../../id.js';
import { PayloadType, type BasePayload } from './base.js';

export interface StartBuildingUpgradePayload extends BasePayload<PayloadType.StartBuildingUpgrade> {
	readonly building: Building;
}

export function readStartBuildingUpgrade(buffer: Buffer): StartBuildingUpgradePayload {
	return {
		type: PayloadType.StartBuildingUpgrade,
		building: buffer.readUInt8(1) as Building
	};
}

export function writeStartBuildingUpgrade(data: Omit<StartBuildingUpgradePayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(2);
	buffer.writeUInt8(PayloadType.StartBuildingUpgrade, 0);
	buffer.writeUInt8(data.building, 1);
	return buffer;
}
