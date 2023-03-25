import { logger } from '#lib/logger';
import { server } from '#lib/server';
import { envParseInteger, envParseString } from '@skyra/env-utilities';

const host = envParseString('API_ADDRESS', '0.0.0.0');
const port = envParseInteger('API_PORT', 3100);

server
	.listen({ port, host })
	.once('listening', () => logger.info(`Listening: ${host}:${port}`))
	.on('error', (error) => logger.error(error));
