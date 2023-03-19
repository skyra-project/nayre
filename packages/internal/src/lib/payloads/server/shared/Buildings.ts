export interface Buildings {
	quarry: number;
	mine: number;
	hydrogenGenerator: number;
	geothermalGenerator: number;
	fusionReactor: number;
	condensationCentre: number;
}

export const BuildingsByteSize = 6;

export function readBuildings(buffer: Buffer, offset: number): Buildings {
	return {
		quarry: buffer.readUInt8(offset),
		mine: buffer.readUInt8(offset + 1),
		hydrogenGenerator: buffer.readUInt8(offset + 2),
		geothermalGenerator: buffer.readUInt8(offset + 3),
		fusionReactor: buffer.readUInt8(offset + 4),
		condensationCentre: buffer.readUInt8(offset + 5)
	};
}

export function writeBuildings(data: Buildings, buffer: Buffer, offset: number) {
	buffer.writeUInt8(data.quarry, offset);
	buffer.writeUInt8(data.mine, offset + 1);
	buffer.writeUInt8(data.hydrogenGenerator, offset + 2);
	buffer.writeUInt8(data.geothermalGenerator, offset + 3);
	buffer.writeUInt8(data.fusionReactor, offset + 4);
	buffer.writeUInt8(data.condensationCentre, offset + 5);
}
