import { Client, Server } from '@skyra/internal';

export default eventHandler(async (event) => {
	const user = await getUserSession(event);
	if (!user) return sendResponseUnauthorized();

	const buffer = await acryssRequest(Client.writePlayerGetAll(), user.id!);
	return sendResponse(event, buffer, Server.readOkPlayerGetAll);
});
