import type { H3Event } from 'h3';
import { Server } from '@skyra/internal';

const url = new URL(process.env.ACRYSS_API_URL!);

export async function acryssRequest(body: Buffer, userId: string | bigint) {
	const response = await fetch(url, {
		body,
		method: 'POST',
		headers: {
			authorization: process.env.ACRYSS_API_TOKEN!,
			'content-type': 'application/octet-stream',
			'x-user-id': userId.toString()
		}
	});
	return Buffer.from(await response.arrayBuffer());
}

export function readErrorMessage(buffer: Buffer) {
	return Server.ErrorCode[Server.readError(buffer).code];
}
