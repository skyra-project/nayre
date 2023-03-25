export interface Facilities {
	robotFactory: number;
	advancedFactory: number;
	shipyard: number;
	spaceShipyard: number;
	researchCentre: number;
}

export const FacilitiesByteSize = 5;

export function readFacilities(buffer: Buffer, offset: number): Facilities {
	return {
		robotFactory: buffer.readUInt8(offset),
		advancedFactory: buffer.readUInt8(offset + 1),
		shipyard: buffer.readUInt8(offset + 2),
		spaceShipyard: buffer.readUInt8(offset + 3),
		researchCentre: buffer.readUInt8(offset + 4)
	};
}

export function writeFacilities(data: Facilities, buffer: Buffer, offset: number) {
	buffer.writeUInt8(data.robotFactory, offset);
	buffer.writeUInt8(data.advancedFactory, offset + 1);
	buffer.writeUInt8(data.shipyard, offset + 2);
	buffer.writeUInt8(data.spaceShipyard, offset + 3);
	buffer.writeUInt8(data.researchCentre, offset + 4);
}
