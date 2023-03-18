export enum PayloadType {
	Ok,
	Error
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
