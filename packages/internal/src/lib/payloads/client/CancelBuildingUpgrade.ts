import type { Building } from '../../id.js';
import { PayloadType, type BasePayload } from './base.js';

export interface CancelBuildingUpgradePayload extends BasePayload<PayloadType.CancelBuildingUpgrade> {
	readonly building: Building;
}

export function readCancelBuildingUpgrade(buffer: Buffer): CancelBuildingUpgradePayload {
	return {
		type: PayloadType.CancelBuildingUpgrade,
		building: buffer.readUInt8(1) as Building
	};
}

export function writeCancelBuildingUpgrade(data: Omit<CancelBuildingUpgradePayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(2);
	buffer.writeUInt8(PayloadType.CancelBuildingUpgrade, 0);
	buffer.writeUInt8(data.building, 1);
	return buffer;
}
