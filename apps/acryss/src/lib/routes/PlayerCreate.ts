import { prisma } from '#lib/prisma';
import { registerRoute } from '#lib/routes/base/Route';
import { Client, Server } from '@skyra/internal';

registerRoute(import.meta.url, async (userId, buffer) => {
	const data = Client.readPlayerCreate(buffer);
	const count = await prisma.player.count({ where: { userId, universeId: data.universeId } });
	if (count !== 0) return Server.writeError({ code: Server.ErrorCode.PlayerAlreadyCreated });

	return Server.writeError({ code: Server.ErrorCode.UnknownRoute });
});
