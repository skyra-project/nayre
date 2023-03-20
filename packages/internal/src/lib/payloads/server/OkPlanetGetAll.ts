import { PayloadType, type BasePayload } from './base.js';

export interface OkPlanetGetAllPayload extends BasePayload<PayloadType.OkPlanetGetAll> {
	planets: Planet[];
}

interface Planet {
	id: bigint;
	name: string;
}

export function readOkPlanetGetAll(buffer: Buffer): OkPlanetGetAllPayload {
	const decoder = new TextDecoder();
	const planets = [] as Planet[];

	let offset = 1;
	for (let i = 0, m = buffer.readUInt8(offset++); i < m; ++i) {
		const id = buffer.readBigUInt64LE(offset);
		const length = buffer.readUInt8(offset + 8);
		const name = decoder.decode(buffer.subarray(offset + 9, offset + 9 + length));
		planets.push({ id, name });
		offset += 9 + length;
	}

	return { type: PayloadType.OkPlanetGetAll, planets };
}

export function writeOkPlanetGetAll(data: Omit<OkPlanetGetAllPayload, 'type'>): Buffer {
	const encoder = new TextEncoder();
	const names = data.planets.map((planet) => encoder.encode(planet.name));
	// Type + planets.length
	// + planets.length * 9 (planet.id (8) + planet.name.byteLength (1))
	// + sum(planet.name.byteLength)
	const size = 2 + data.planets.length * 9 + names.reduce((acc, name) => acc + name.byteLength, 0);
	const buffer = Buffer.allocUnsafe(size);
	buffer.writeUInt8(PayloadType.OkPlanetGetAll, 0);
	buffer.writeUInt8(data.planets.length, 1);

	let offset = 2;
	for (let i = 0; i < data.planets.length; ++i) {
		buffer.writeBigUInt64LE(data.planets[i].id, offset);

		const name = names[i];
		buffer.writeUInt8(name.byteLength);
		buffer.set(name, offset + 9);
		offset += 9 + name.byteLength;
	}

	return buffer;
}
