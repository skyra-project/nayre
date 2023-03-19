import { envParseString } from '@skyra/env-utilities';

const AcryssApiUrl = envParseString('ACRYSS_API_URL');
const AcryssApiToken = envParseString('ACRYSS_API_TOKEN');

export async function acryssRequest(userId: bigint | string, body: Buffer) {
	const response = await fetch(AcryssApiUrl, {
		body,
		method: 'POST',
		headers: {
			authorization: AcryssApiToken,
			'content-type': 'application/octet-stream',
			'x-user-id': userId.toString()
		}
	});

	return Buffer.from(await response.arrayBuffer());
}
