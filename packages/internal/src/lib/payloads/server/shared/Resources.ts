export interface Resources {
	metal: number;
	crystal: number;
	hydrogen: number;
	energy: number;
	electronPlasma: number;
}

export const ResourcesByteSize = 8 * 5;

export function readResources(buffer: Buffer, offset: number): Resources {
	return {
		metal: buffer.readDoubleLE(offset),
		crystal: buffer.readDoubleLE(offset + 8),
		hydrogen: buffer.readDoubleLE(offset + 16),
		energy: buffer.readDoubleLE(offset + 24),
		electronPlasma: buffer.readDoubleLE(offset + 32)
	};
}

export function writeResources(data: Resources, buffer: Buffer, offset: number) {
	buffer.writeDoubleLE(data.metal, offset);
	buffer.writeDoubleLE(data.crystal, offset + 8);
	buffer.writeDoubleLE(data.hydrogen, offset + 16);
	buffer.writeDoubleLE(data.energy, offset + 24);
	buffer.writeDoubleLE(data.electronPlasma, offset + 32);
}
