import { prisma } from '#lib/prisma';
import { registerRoute } from '#lib/routes/base/Route';
import { Server } from '@skyra/internal';

registerRoute(import.meta.url, async (userId) => {
	const players = await prisma.player.findMany({
		where: { userId },
		select: {
			id: true,
			universeId: true,
			planets: { select: { id: true, planetId: true } }
		}
	});
	return Server.writeOkGetPlayers({ players });
});
