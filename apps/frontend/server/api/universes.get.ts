import { Client } from '@skyra/internal';

export default eventHandler(async (event) => {
	const user = await getUserSession(event);
	if (!user) return [];

	return acryssRequest(Client.writePlayerGetAll(), user.id!);
});
