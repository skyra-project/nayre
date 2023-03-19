import { logger } from '#lib/logger';
import { Routes } from '#lib/routes/base/Route';
import { isNullish, isNullishOrEmpty } from '@sapphire/utilities';
import { envParseString } from '@skyra/env-utilities';
import { Client, Server } from '@skyra/internal';
import { opendir } from 'node:fs/promises';
import { createServer, IncomingMessage, ServerResponse } from 'node:http';
import { buffer } from 'node:stream/consumers';

export const InternalApiToken = envParseString('INTERNAL_API_TOKEN');

for await (const dirent of await opendir(new URL('routes', import.meta.url))) {
	if (dirent.isFile() && dirent.name.endsWith('.js')) await import(dirent.name);
}

export const server = createServer({ keepAlive: true, requestTimeout: 5000, uniqueHeaders: ['x-user-id'] }, (request, response) => {
	if (request.headers.authorization !== InternalApiToken) {
		return response.writeHead(401, ErrorHeaders).end(UnauthorizedBody);
	}

	if (request.headers['content-type'] !== ContentType) {
		return response.writeHead(415, ErrorHeaders).end(UnsupportedMediaTypeBody);
	}

	const userId = getUserId(request.headers['x-user-id'] as string | undefined);
	if (isNullish(userId)) {
		return response.writeHead(400, ErrorHeaders).end(UnknownUserIdBody);
	}

	return handleRequest(userId, request, response);
});

function getUserId(rawUserId: string | undefined) {
	if (isNullishOrEmpty(rawUserId)) return null;

	let userId: bigint;
	try {
		userId = BigInt(rawUserId);
	} catch {
		return null;
	}

	return userId;
}

async function handleRequest(userId: bigint, request: IncomingMessage, response: ServerResponse) {
	const body = await buffer(request);
	const type = Client.readType(body);
	const route = Routes.get(type);

	if (isNullish(route)) {
		return response.writeHead(404, ErrorHeaders).end(NotFoundBody);
	}

	let data: Buffer;
	try {
		data = await route(userId, body);
	} catch (error) {
		logger.error(error);
		return response.writeHead(500, ErrorHeaders).end(InternalErrorBody);
	}

	const success = Server.readType(data) === Server.PayloadType.Ok;
	return response.writeHead(success ? 200 : 400, makeHeaders(data)).end(data);
}

const ContentType = 'application/octet-stream';

function makeHeaders(bytes: Buffer) {
	return {
		'Content-Length': bytes.byteLength,
		'Content-Type': ContentType
	} as const;
}

const UnknownUserIdBody = Server.writeError({ code: Server.ErrorCode.UnknownUserId });
const UnauthorizedBody = Server.writeError({ code: Server.ErrorCode.UnknownToken });
const NotFoundBody = Server.writeError({ code: Server.ErrorCode.UnknownRoute });
const UnsupportedMediaTypeBody = Server.writeError({ code: Server.ErrorCode.UnknownMediaFormat });
const InternalErrorBody = Server.writeError({ code: Server.ErrorCode.InternalError });

const ErrorHeaders = makeHeaders(InternalErrorBody);
