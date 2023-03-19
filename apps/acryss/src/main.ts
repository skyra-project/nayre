import { logger } from '#lib/logger';
import { server } from '#lib/server';
import { envParseInteger, envParseString } from '@skyra/env-utilities';

server
	.listen({
		port: envParseInteger('API_PORT'),
		host: envParseString('API_ADDRESS')
	})
	.on('error', (error) => logger.error(error));
