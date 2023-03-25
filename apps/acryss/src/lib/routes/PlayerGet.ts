import { prisma } from '#lib/prisma';
import { registerRoute } from '#lib/routes/base/Route';
import { isNullish } from '@sapphire/utilities';
import { Client, Server } from '@skyra/internal';

registerRoute(import.meta.url, async (userId, buffer) => {
	const data = Client.readPlayerGet(buffer);
	const player = await prisma.player.findFirst({ where: { userId, universeId: data.universeId } });
	if (isNullish(player)) return Server.writeError({ code: Server.ErrorCode.UnknownPlayer });
	if (player.userId !== userId) return Server.writeError({ code: Server.ErrorCode.InvalidPlayerId });
	return Server.writeError({ code: Server.ErrorCode.UnknownRoute });
});
