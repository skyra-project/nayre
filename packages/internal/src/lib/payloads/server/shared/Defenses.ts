export interface Defenses {
	railgunTurret: number;
	laserTurret: number;
	vanguardTurret: number;
	ionTurret: number;
	kineticCannon: number;
	naeriaTurret: number;
	shieldDome: number;
	heavyShieldDome: number;
}

export const DefensesByteSize = 4 * 8;

export function readDefenses(buffer: Buffer, offset: number): Defenses {
	return {
		railgunTurret: buffer.readUInt32LE(offset),
		laserTurret: buffer.readUInt32LE(offset + 4),
		vanguardTurret: buffer.readUInt32LE(offset + 8),
		ionTurret: buffer.readUInt32LE(offset + 12),
		kineticCannon: buffer.readUInt32LE(offset + 16),
		naeriaTurret: buffer.readUInt32LE(offset + 20),
		shieldDome: buffer.readUInt32LE(offset + 24),
		heavyShieldDome: buffer.readUInt32LE(offset + 28)
	};
}

export function writeDefenses(data: Defenses, buffer: Buffer, offset: number) {
	buffer.writeUInt32LE(data.railgunTurret, offset);
	buffer.writeUInt32LE(data.laserTurret, offset + 4);
	buffer.writeUInt32LE(data.vanguardTurret, offset + 8);
	buffer.writeUInt32LE(data.ionTurret, offset + 12);
	buffer.writeUInt32LE(data.kineticCannon, offset + 16);
	buffer.writeUInt32LE(data.naeriaTurret, offset + 20);
	buffer.writeUInt32LE(data.shieldDome, offset + 24);
	buffer.writeUInt32LE(data.heavyShieldDome, offset + 28);
}
