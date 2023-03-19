export async function acryssRequest(body: Buffer, userId: string | bigint) {
	const response = await fetch(process.env.ACRYSS_API_URL!, {
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
