import { setup } from '#lib/setup/all';
import { registerCommands } from '#lib/utilities/register-commands';
import { envParseInteger, envParseString } from '@skyra/env-utilities';
import { Client } from '@skyra/http-framework';
import { init, load } from '@skyra/http-framework-i18n';

setup();

await load(new URL('../src/locales', import.meta.url));
await init({
	fallbackLng: 'en-US',
	returnNull: false,
	returnEmptyString: false,
	returnObjects: true
});

const client = new Client();
await client.load();

void registerCommands();

const address = envParseString('HTTP_ADDRESS', '0.0.0.0');
const port = envParseInteger('HTTP_PORT', 3000);
await client.listen({ address, port });
