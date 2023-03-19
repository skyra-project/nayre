import { PayloadType, type BasePayload } from './base.js';
import { BuildingsByteSize, readBuildings, writeBuildings, type Buildings } from './shared/Buildings.js';
import { DefensesByteSize, readDefenses, writeDefenses, type Defenses } from './shared/Defenses.js';
import { FacilitiesByteSize, readFacilities, writeFacilities, type Facilities } from './shared/Facilities.js';
import { readResources, ResourcesByteSize, writeResources, type Resources } from './shared/Resources.js';
import { readVehicles, VehiclesByteSize, writeVehicles, type Vehicles } from './shared/Vehicles.js';

export interface OkGetPlanetPayload extends BasePayload<PayloadType.OkGetPlanet> {
	resources: Resources;
	buildings: Buildings;
	facilities: Facilities;
	defenses: Defenses;
	vehicles: Vehicles;
}

const ResourcesOffset = 1;
const BuildingsOffset = ResourcesOffset + ResourcesByteSize;
const FacilitiesOffset = BuildingsOffset + BuildingsByteSize;
const DefensesOffset = FacilitiesOffset + FacilitiesByteSize;
const VehiclesOffset = DefensesOffset + DefensesByteSize;

export function readOkGetPlanet(buffer: Buffer): OkGetPlanetPayload {
	return {
		type: PayloadType.OkGetPlanet,
		resources: readResources(buffer, ResourcesOffset),
		buildings: readBuildings(buffer, BuildingsOffset),
		facilities: readFacilities(buffer, FacilitiesOffset),
		defenses: readDefenses(buffer, DefensesOffset),
		vehicles: readVehicles(buffer, VehiclesOffset)
	};
}

const Size = VehiclesOffset + VehiclesByteSize;
export function writeOkGetPlanet(data: Omit<OkGetPlanetPayload, 'type'>): Buffer {
	const buffer = Buffer.allocUnsafe(Size);
	buffer.writeUInt8(PayloadType.OkGetPlanet, 0);
	writeResources(data.resources, buffer, ResourcesOffset);
	writeBuildings(data.buildings, buffer, BuildingsOffset);
	writeFacilities(data.facilities, buffer, FacilitiesOffset);
	writeDefenses(data.defenses, buffer, DefensesOffset);
	writeVehicles(data.vehicles, buffer, VehiclesOffset);

	return buffer;
}
