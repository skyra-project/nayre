import type { IntegerString } from '@skyra/env-utilities';

declare module '@skyra/env-utilities' {
	interface Env {
		CLIENT_NAME: string;
		CLIENT_VERSION: string;

		HTTP_ADDRESS: string;
		HTTP_PORT: IntegerString;

		REGISTRY_GUILD_ID: string;

		ACRYSS_API_URL: string;
		ACRYSS_API_TOKEN: string;
	}
}
