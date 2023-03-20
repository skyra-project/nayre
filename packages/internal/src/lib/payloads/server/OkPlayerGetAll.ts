import { PayloadType, type BasePayload } from './base.js';

export interface OkPlayerGetAllPayload extends BasePayload<PayloadType.OkPlayerGetAll> {
	players: Player[];
}

interface Player {
	id: bigint;
	universeId: bigint;
	planets: Planet[];
}

interface Planet {
	id: bigint;
	planetId: number;
}

export function readOkPlayerGetAll(buffer: Buffer): OkPlayerGetAllPayload {
	let offset = 1;
	const players = [] as Player[];
	for (let i = 0, m = buffer.readUInt8(offset++); i < m; ++i) {
		const player = {
			id: buffer.readBigUInt64LE(offset),
			universeId: buffer.readBigUInt64LE(offset + 8),
			planets: []
		} as Player;
		offset += 16;

		for (let j = 0, n = buffer.readUInt8(offset++); j < n; ++j) {
			player.planets.push({
				id: buffer.readBigUInt64LE(offset),
				planetId: buffer.readUint32LE(offset + 8)
			});

			offset += 12;
		}
		players.push(player);
	}

	return { type: PayloadType.OkPlayerGetAll, players };
}

export function writeOkPlayerGetAll(data: Omit<OkPlayerGetAllPayload, 'type'>): Buffer {
	const playersSize = 17 * data.players.length;
	const planetsSize = data.players.reduce((acc, player) => acc + player.planets.length, 0) * 12;
	const buffer = Buffer.allocUnsafe(2 + playersSize + planetsSize);
	buffer.writeUInt8(PayloadType.OkPlayerGetAll, 0);

	let offset = 1;
	buffer.writeUInt8(data.players.length, offset++);
	for (const player of data.players) {
		buffer.writeBigUInt64LE(player.id, offset);
		buffer.writeBigUInt64LE(player.universeId, offset + 8);

		offset += 16;
		buffer.writeUInt8(player.planets.length, offset++);
		for (const planet of player.planets) {
			buffer.writeBigUInt64LE(planet.id, offset);
			buffer.writeUInt32LE(planet.planetId, offset + 8);
			offset += 12;
		}
	}

	return buffer;
}
