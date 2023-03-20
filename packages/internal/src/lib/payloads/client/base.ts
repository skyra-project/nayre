export enum PayloadType {
	// Player
	PlayerGetAll = 10,
	PlayerGet,
	PlayerCreate = 15,
	PlayerDelete,

	// Planet
	PlanetGetAll = 20,
	PlanetGet,

	// Building
	BuildingGetAll = 30,
	BuildingGet,
	BuildingUpgradeQueue,
	BuildingUpgradeAbort,

	// Research
	ResearchGetAll = 40,
	ResearchGet,
	ResearchUpgradeQueue,
	ResearchUpgradeAbort,

	// Vehicle
	VehicleGetAll = 50,
	VehicleGet,
	VehicleBuildQueue,
	VehicleBuildAbort,

	// Universe
	UniverseCreate = 90,
	UniverseDelete
}

export interface BasePayload<T extends PayloadType> {
	readonly type: T;
}

export interface BasePlanetPayload<T extends PayloadType> extends BasePayload<T> {
	readonly universeId: bigint;
	readonly planetId: number;
}

export const BasePayloadOffset = 1;
export function writeType(buffer: Buffer, type: PayloadType) {
	buffer.writeUInt8(type, 0);
}

export const BasePlanetPayloadOffset = BasePayloadOffset + 8 + 4;
export function writePlanetPayload<T extends PayloadType>(buffer: Buffer, type: T, payload: Omit<BasePlanetPayload<T>, 'type'>) {
	writeType(buffer, type);
	buffer.writeBigUInt64LE(payload.universeId, BasePayloadOffset);
	buffer.writeUInt32LE(payload.planetId, BasePayloadOffset + 8);
}

/**
 * Reads the type from a buffer.
 * @param buffer The buffer to read the data from.
 * @returns The payload type.
 */
export function readType(buffer: Buffer): PayloadType {
	return buffer.readUInt8(0);
}

export function readPlanetPayload<T extends PayloadType>(buffer: Buffer) {
	return {
		type: readType(buffer) as T,
		universeId: buffer.readBigUInt64LE(BasePayloadOffset),
		planetId: buffer.readUInt32LE(BasePayloadOffset + 8)
	};
}
