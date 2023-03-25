const url = new URL(process.env.ACRYSS_API_URL!);

export async function acryssRequest(body: Buffer, userId: string | bigint) {
	console.log({ body, userId });
	try {
		const response = await fetch(url, {
			body,
			method: 'POST',
			headers: {
				authorization: process.env.ACRYSS_API_TOKEN!,
				'content-type': 'application/octet-stream',
				'x-user-id': userId.toString()
			}
		});
		console.log('response', response);
		return Buffer.from(await response.arrayBuffer());
	} catch (error) {
		console.log('error', error);
		throw error;
	}
}
