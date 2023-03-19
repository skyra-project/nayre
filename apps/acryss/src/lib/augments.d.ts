import type { IntegerString } from '@skyra/env-utilities';

declare module '@skyra/env-utilities' {
	interface Env {
		API_ADDRESS: string;
		API_PORT: IntegerString;

		INTERNAL_API_TOKEN: string;
	}
}
