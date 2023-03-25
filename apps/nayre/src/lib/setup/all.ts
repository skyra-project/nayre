import '#lib/setup/logger';
import { setup as envRun } from '@skyra/env-utilities';
import { initializeSentry, setInvite, setRepository } from '@skyra/shared-http-pieces';

import '@skyra/shared-http-pieces/register';

export function setup() {
	envRun(new URL('../../../src/.env', import.meta.url));

	setRepository('nayre');
	setInvite('948377476269228032', '51200');
	initializeSentry();
}
