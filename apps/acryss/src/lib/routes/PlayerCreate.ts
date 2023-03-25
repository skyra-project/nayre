import { prisma } from '#lib/prisma';
import { registerRoute } from '#lib/routes/base/Route';
import { random, shuffle } from '#lib/util/utilities';
import { Collection } from '@discordjs/collection';
import type { Planet } from '@prisma/client';
import { Client, makePlanetId, MaximumSystems, parsePlanetId, Server } from '@skyra/internal';

function findBestPlanetId(planets: readonly Pick<Planet, 'planetId'>[]) {
	const systems = new Collection<number, number[]>();
	for (const result of planets) {
		const { system, position } = parsePlanetId(result.planetId);
		systems.ensure(system, () => []).push(position);
	}

	let smallestSystem = -1;
	let smallestPlanets = 12;
	for (const [system, planets] of systems) {
		if (planets.length < smallestPlanets) {
			smallestSystem = system;
			smallestPlanets = planets.length;
		}
	}

	if (smallestPlanets < 4) {
		const positions = shuffle([3, 4, 5, 6, 7, 8]);
		const planets = systems.get(smallestSystem)!;
		const position = positions.find((position) => !planets.includes(position))!;
		return makePlanetId(smallestSystem, position);
	}

	for (let i = 0; i < MaximumSystems; ++i) {
		if (systems.has(i)) continue;
		return makePlanetId(i, random(3, 9));
	}

	throw new Error('Unreachable');
}

registerRoute(import.meta.url, async (userId, buffer) => {
	const data = Client.readPlayerCreate(buffer);
	const count = await prisma.player.count({ where: { userId, universeId: data.universeId } });
	if (count !== 0) return Server.writeError({ code: Server.ErrorCode.PlayerAlreadyCreated });

	const planets = await prisma.planet.findMany({
		where: { universeId: data.universeId },
		select: { planetId: true }
	});
	const planetId = findBestPlanetId(planets);
	await prisma.planet.create({
		data: {
			name: 'Planet',
			planetId,
			universe: { connect: { id: data.universeId } },
			owner: {
				create: {
					user: { connectOrCreate: { where: { id: userId }, create: { id: userId } } },
					universe: { connect: { id: data.universeId } }
				}
			}
		},
		select: null
	});

	return Server.writeOkPlayerCreate({ planetId });
});
