import { registerRoute } from '#lib/routes/base/Route';
import { Client, Server } from '@skyra/internal';

registerRoute(import.meta.url, (_userId, buffer) => {
	const payload = Client.readCancelBuildingUpgrade(buffer);
	console.log(payload);

	return Server.writeError({ code: Server.ErrorCode.UnknownRoute });
});
