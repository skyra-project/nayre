export interface Vehicles {
	cargoShip: number;
	heavyCargoShip: number;
	interceptorJet: number;
	hiivii: number;
	espionageProbe: number;
	fighter: number;
	advancedFighter: number;
	cruiser: number;
	battleship: number;
	battlecruiser: number;
	bomber: number;
	destroyer: number;
	ballistaBomber: number;
	ballistaDestroyer: number;
}

export const VehiclesByteSize = 14 * 4;

export function readVehicles(buffer: Buffer, offset: number): Vehicles {
	return {
		cargoShip: buffer.readUInt32LE(offset),
		heavyCargoShip: buffer.readUInt32LE(offset + 4),
		interceptorJet: buffer.readUInt32LE(offset + 8),
		hiivii: buffer.readUInt32LE(offset + 12),
		espionageProbe: buffer.readUInt32LE(offset + 16),
		fighter: buffer.readUInt32LE(offset + 20),
		advancedFighter: buffer.readUInt32LE(offset + 24),
		cruiser: buffer.readUInt32LE(offset + 28),
		battleship: buffer.readUInt32LE(offset + 32),
		battlecruiser: buffer.readUInt32LE(offset + 36),
		bomber: buffer.readUInt32LE(offset + 40),
		destroyer: buffer.readUInt32LE(offset + 44),
		ballistaBomber: buffer.readUInt32LE(offset + 48),
		ballistaDestroyer: buffer.readUInt32LE(offset + 52)
	};
}

export function writeVehicles(data: Vehicles, buffer: Buffer, offset: number) {
	buffer.writeUInt32LE(data.cargoShip, offset);
	buffer.writeUInt32LE(data.heavyCargoShip, offset + 4);
	buffer.writeUInt32LE(data.interceptorJet, offset + 8);
	buffer.writeUInt32LE(data.hiivii, offset + 12);
	buffer.writeUInt32LE(data.espionageProbe, offset + 16);
	buffer.writeUInt32LE(data.fighter, offset + 20);
	buffer.writeUInt32LE(data.advancedFighter, offset + 24);
	buffer.writeUInt32LE(data.cruiser, offset + 28);
	buffer.writeUInt32LE(data.battleship, offset + 32);
	buffer.writeUInt32LE(data.battlecruiser, offset + 36);
	buffer.writeUInt32LE(data.bomber, offset + 40);
	buffer.writeUInt32LE(data.destroyer, offset + 44);
	buffer.writeUInt32LE(data.ballistaBomber, offset + 48);
	buffer.writeUInt32LE(data.ballistaDestroyer, offset + 52);
}
