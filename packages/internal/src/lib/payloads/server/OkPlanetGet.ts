import { PayloadType, type BasePayload } from './base.js';
import { BuildingsByteSize, readBuildings, writeBuildings, type Buildings } from './shared/Buildings.js';
import { DefensesByteSize, readDefenses, writeDefenses, type Defenses } from './shared/Defenses.js';
import { FacilitiesByteSize, readFacilities, writeFacilities, type Facilities } from './shared/Facilities.js';
import { readResources, ResourcesByteSize, writeResources, type Resources } from './shared/Resources.js';
import { readVehicles, VehiclesByteSize, writeVehicles, type Vehicles } from './shared/Vehicles.js';

export interface OkPlanetGetPayload extends BasePayload<PayloadType.OkPlanetGet> {
	resources: Resources;
	buildings: Buildings;
	facilities: Facilities;
	defenses: Defenses;
	vehicles: Vehicles;
	colonizedAt: number;
	name: string;
}

const ResourcesOffset = 1;
const BuildingsOffset = ResourcesOffset + ResourcesByteSize;
const FacilitiesOffset = BuildingsOffset + BuildingsByteSize;
const DefensesOffset = FacilitiesOffset + FacilitiesByteSize;
const VehiclesOffset = DefensesOffset + DefensesByteSize;
const ColonizedAtOffset = VehiclesOffset + VehiclesByteSize;
const NameOffset = ColonizedAtOffset + 8;

export function readOkPlanetGet(buffer: Buffer): OkPlanetGetPayload {
	return {
		type: PayloadType.OkPlanetGet,
		resources: readResources(buffer, ResourcesOffset),
		buildings: readBuildings(buffer, BuildingsOffset),
		facilities: readFacilities(buffer, FacilitiesOffset),
		defenses: readDefenses(buffer, DefensesOffset),
		vehicles: readVehicles(buffer, VehiclesOffset),
		colonizedAt: buffer.readDoubleLE(ColonizedAtOffset),
		name: new TextDecoder().decode(buffer.subarray(NameOffset))
	};
}

const Size = ColonizedAtOffset + 8;
export function writeOkPlanetGet(data: Omit<OkPlanetGetPayload, 'type'>): Buffer {
	const name = new TextEncoder().encode(data.name);
	const buffer = Buffer.allocUnsafe(Size + name.byteLength);
	buffer.writeUInt8(PayloadType.OkPlanetGet, 0);
	writeResources(data.resources, buffer, ResourcesOffset);
	writeBuildings(data.buildings, buffer, BuildingsOffset);
	writeFacilities(data.facilities, buffer, FacilitiesOffset);
	writeDefenses(data.defenses, buffer, DefensesOffset);
	writeVehicles(data.vehicles, buffer, VehiclesOffset);
	buffer.writeDoubleLE(data.colonizedAt, ColonizedAtOffset);
	buffer.set(name, NameOffset);

	return buffer;
}
