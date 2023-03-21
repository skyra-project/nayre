import { prisma } from '#lib/prisma';
import { registerRoute } from '#lib/routes/base/Route';
import { Client, Server } from '@skyra/internal';

registerRoute(import.meta.url, async (userId, buffer) => {
	const data = Client.readPlanetGetAll(buffer);
	const planets = await prisma.planet.findMany({
		where: { universeId: data.universeId, owner: { userId } },
		select: { planetId: true, name: true }
	});
	return Server.writeOkPlanetGetAll({ planets });
});
