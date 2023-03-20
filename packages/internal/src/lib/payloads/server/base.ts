export enum PayloadType {
	Ok,
	OkPlanetGet,
	OkPlanetGetAll,
	OkPlayerGet,
	OkPlayerGetAll,
	Error = 200
}

export interface BasePayload<T extends PayloadType> {
	readonly type: T;
}

/**
 * Reads the type from a buffer.
 * @param buffer The buffer to read the data from.
 * @returns The payload type.
 */
export function readType(buffer: Buffer): PayloadType {
	return buffer.readUInt8(0);
}

export function isOk(buffer: Buffer) {
	return readType(buffer) !== PayloadType.Error;
}

export function isError(buffer: Buffer) {
	return readType(buffer) === PayloadType.Error;
}
