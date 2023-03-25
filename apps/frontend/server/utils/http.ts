import { Server } from '@skyra/internal';
import type { H3Event } from 'h3';

export function sendResponseError(statusCode: number, message: string): never {
	throw createError({ statusCode, statusMessage: message });
}

export function sendResponseUnauthorized(): never {
	sendResponseError(401, 'Unauthorized');
}

const replacer = (_: string, value: unknown) => (typeof value === 'bigint' ? value.toString() : value);
export function sendResponseBody(event: H3Event, body: object) {
	return send(event, JSON.stringify(body, replacer), 'application/json');
}

export async function sendResponse<T extends object>(event: H3Event, buffer: Buffer, cb: (buffer: Buffer) => T): Promise<T> {
	if (Server.isError(buffer)) sendResponseError(400, readErrorMessage(buffer));

	const body = cb(buffer);
	await sendResponseBody(event, body);
	return body;
}
