import { PayloadType, type BasePayload } from './base.js';

export interface GetPlayersPayload extends BasePayload<PayloadType.GetPlayers> {}

export function readGetPlayers(): GetPlayersPayload {
	return { type: PayloadType.GetPlayers };
}

export function writeGetPlayers(): Buffer {
	const buffer = Buffer.allocUnsafe(1);
	buffer.writeUInt8(PayloadType.GetPlayers, 0);
	return buffer;
}
