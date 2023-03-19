import { prisma } from '#lib/prisma';
import { registerRoute } from '#lib/routes/base/Route';
import { Client, Server } from '@skyra/internal';

registerRoute(import.meta.url, async (_userId, buffer) => {
	const data = Client.readDeleteUniverse(buffer);
	try {
		await prisma.universe.delete({ where: { id: data.id } });
		return Server.writeOk();
	} catch {
		return Server.writeError({ code: Server.ErrorCode.UnknownUniverse });
	}
});
