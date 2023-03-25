import { Client, Server } from '@skyra/internal';

export default eventHandler(async (event) => {
	const user = await getUserSession(event);
	if (!user) return [];

	const buffer = await acryssRequest(Client.writePlayerGetAll(), user.id!);
	if (Server.isOk(buffer)) return Server.readOkPlayerGetAll(buffer);

	event.node.res.statusCode = 400;
	event.node.res.statusMessage = readErrorMessage(buffer);
	return null;
});
