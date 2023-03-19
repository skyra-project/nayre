import { PayloadType, type BasePayload } from './base.js';

export interface OkGetPlayerPayload extends BasePayload<PayloadType.OkGetPlayer> {
	research: Research;
	planets: Planet[];
	tasks: [];
	payloadTasks: [];
	cargoTasks: [];
}

interface Planet {
	id: number;
}

interface Research {
	energy: number;
	electromagnet: number;
	laser: number;
	ion: number;
	plasma: number;
	combustionDrive: number;
	ionDrive: number;
	impulseDrive: number;
	warpDrive: number;
	espionage: number;
	computing: number;
	attack: number;
	shield: number;
	hull: number;
}

export function readOkGetPlayer(buffer: Buffer): OkGetPlayerPayload {
	let offset = 16;
	const planets = [] as Planet[];
	for (let i = 0, m = buffer.readUInt8(15); i < m; ++i) {
		planets.push({ id: buffer.readUInt32LE(offset) });
		offset += 4;
	}

	return {
		type: PayloadType.OkGetPlayer,
		research: {
			energy: buffer.readUInt8(1),
			electromagnet: buffer.readUInt8(2),
			laser: buffer.readUInt8(3),
			ion: buffer.readUInt8(4),
			plasma: buffer.readUInt8(5),
			combustionDrive: buffer.readUInt8(6),
			ionDrive: buffer.readUInt8(7),
			impulseDrive: buffer.readUInt8(8),
			warpDrive: buffer.readUInt8(9),
			espionage: buffer.readUInt8(10),
			computing: buffer.readUInt8(11),
			attack: buffer.readUInt8(12),
			shield: buffer.readUInt8(13),
			hull: buffer.readUInt8(14)
		},
		planets,
		tasks: [],
		payloadTasks: [],
		cargoTasks: []
	};
}

export function writeOkGetPlayer(data: Omit<OkGetPlayerPayload, 'type'>): Buffer {
	const ChunkPlanets = 1 + data.planets.length * 4;
	const buffer = Buffer.allocUnsafe(15 + ChunkPlanets);
	buffer.writeUInt8(PayloadType.OkGetPlayer, 0);

	// research
	buffer.writeUInt8(data.research.energy, 1);
	buffer.writeUInt8(data.research.electromagnet, 2);
	buffer.writeUInt8(data.research.laser, 3);
	buffer.writeUInt8(data.research.ion, 4);
	buffer.writeUInt8(data.research.plasma, 5);
	buffer.writeUInt8(data.research.combustionDrive, 6);
	buffer.writeUInt8(data.research.ionDrive, 7);
	buffer.writeUInt8(data.research.impulseDrive, 8);
	buffer.writeUInt8(data.research.warpDrive, 9);
	buffer.writeUInt8(data.research.espionage, 10);
	buffer.writeUInt8(data.research.computing, 11);
	buffer.writeUInt8(data.research.attack, 12);
	buffer.writeUInt8(data.research.shield, 13);
	buffer.writeUInt8(data.research.hull, 14);

	// planets
	buffer.writeUInt8(data.planets.length, 15);
	let offset = 16;
	for (const planet of data.planets) {
		buffer.writeUInt32LE(planet.id, offset);
		offset += 4;
	}

	return buffer;
}
