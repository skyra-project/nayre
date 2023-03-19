import { NuxtAuthHandler } from '#auth';
import DiscordProvider from 'next-auth/providers/discord';

export default NuxtAuthHandler({
	secret: process.env.NUXT_SECRET!,
	providers: [
		DiscordProvider.default({
			clientId: process.env.DISCORD_CLIENT_ID!,
			clientSecret: process.env.DISCORD_CLIENT_SECRET!
		})
	]
});
