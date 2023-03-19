import { getServerSession } from '#auth';
import { Client } from '@skyra/internal';

export default eventHandler(async (event) => {
	const session = await getServerSession(event);
	if (!session?.user) return [];

	console.log({ session });
	// TODO: next-auth is dumb and does not support `.id`. Refs:
	// - https://github.com/nextauthjs/next-auth/blob/main/packages/next-auth/src/providers/discord.ts#L41
	// - https://github.com/nextauthjs/next-auth/blob/main/packages/next-auth/src/core/routes/session.ts#L131-L135
	return acryssRequest(Client.writeGetPlayers(), session.user.name!);
});
