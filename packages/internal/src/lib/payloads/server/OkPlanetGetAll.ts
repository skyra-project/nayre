import { PayloadType, type BasePayload } from './base.js';

export interface OkPlanetGetAllPayload extends BasePayload<PayloadType.OkPlanetGetAll> {
	planets: Planet[];
}

interface Planet {
	planetId: number;
	name: string;
}

export function readOkPlanetGetAll(buffer: Buffer): OkPlanetGetAllPayload {
	const decoder = new TextDecoder();
	const planets = [] as Planet[];

	let offset = 1;
	for (let i = 0, m = buffer.readUInt8(offset++); i < m; ++i) {
		const planetId = buffer.readUInt32LE(offset);
		const length = buffer.readUInt8(offset + 4);
		const name = decoder.decode(buffer.subarray(offset + 5, offset + 5 + length));
		planets.push({ planetId, name });
		offset += 5 + length;
	}

	return { type: PayloadType.OkPlanetGetAll, planets };
}

export function writeOkPlanetGetAll(data: Omit<OkPlanetGetAllPayload, 'type'>): Buffer {
	const encoder = new TextEncoder();
	const names = data.planets.map((planet) => encoder.encode(planet.name));
	// Type + planets.length
	// + planets.length * 5 (planet.planetId (4) + planet.name.byteLength (1))
	// + sum(planet.name.byteLength)
	const size = 2 + data.planets.length * 5 + names.reduce((acc, name) => acc + name.byteLength, 0);
	const buffer = Buffer.allocUnsafe(size);
	buffer.writeUInt8(PayloadType.OkPlanetGetAll, 0);
	buffer.writeUInt8(data.planets.length, 1);

	let offset = 2;
	for (let i = 0; i < data.planets.length; ++i) {
		buffer.writeUInt32LE(data.planets[i].planetId, offset);

		const name = names[i];
		buffer.writeUInt8(name.byteLength);
		buffer.set(name, offset + 5);
		offset += 5 + name.byteLength;
	}

	return buffer;
}
