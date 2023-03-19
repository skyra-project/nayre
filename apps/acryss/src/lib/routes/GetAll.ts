import { registerRoute } from '#lib/routes/base/Route';
import { Server } from '@skyra/internal';

registerRoute(import.meta.url, (_userId) => {
	return Server.writeError({ code: Server.ErrorCode.UnknownRoute });
});
