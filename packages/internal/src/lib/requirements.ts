import Collection from '@discordjs/collection';
import { isNullish, isNullishOrEmpty } from '@sapphire/utilities';
import { Building, Defense, Research, Retrofit, Vehicle } from './id.js';

const requirements = [
	...([
		{
			id: Building.Quarry,
			resources: { metal: 200 }
		},
		{
			id: Building.Mine,
			resources: { metal: 150, crystal: 50 }
		},
		{
			id: Building.HydrogenGenerator,
			resources: { metal: 350, crystal: 200 },
			requirements: [{ requirementId: Research.Energy, level: 1 }]
		},
		{
			id: Building.GeothermalGenerator,
			resources: { metal: 1000, crystal: 500, hydrogen: 100 }
		},
		{
			id: Building.FusionReactor,
			resources: { metal: 12000, crystal: 5000, hydrogen: 1000 },
			requirements: [{ requirementId: Research.Energy, level: 4 }]
		},
		{
			id: Building.CondensationCentre,
			resources: { metal: 50000, crystal: 75000, hydrogen: 25000 },
			requirements: [{ requirementId: Research.Energy, level: 10 }]
		},
		{
			id: Building.RobotFactory,
			resources: { metal: 500 }
		},
		{
			id: Building.AdvancedFactory,
			resources: { metal: 25000, crystal: 20000 },
			requirements: [{ requirementId: Building.RobotFactory, level: 12 }]
		},
		{
			id: Building.Shipyard,
			resources: { metal: 1000 }
		},
		{
			id: Building.SpaceShipyard,
			resources: { metal: 15000, crystal: 25000, hydrogen: 10000 },
			requirements: [
				{ requirementId: Building.Shipyard, level: 6 },
				{ requirementId: Research.CombustionDrive, level: 6 }
			]
		},
		{
			id: Building.ResearchCentre,
			resources: { metal: 1000, crystal: 500 },
			requirements: [{ requirementId: Building.Shipyard, level: 2 }]
		}
	] satisfies RawDataEntry<Building>[]),
	...([
		{
			id: Defense.RailgunTurret,
			resources: { metal: 500 }
		},
		{
			id: Defense.LaserTurret,
			resources: { metal: 1500, crystal: 1000 },
			requirements: [
				{ requirementId: Research.Laser, level: 2 },
				{ requirementId: Building.Shipyard, level: 2 }
			]
		},
		{
			id: Defense.VanguardTurret,
			resources: { metal: 2500, crystal: 2000 },
			requirements: [
				{ requirementId: Research.Laser, level: 6 },
				{ requirementId: Building.Shipyard, level: 4 }
			]
		},
		{
			id: Defense.IonTurret,
			resources: { metal: 5000, crystal: 7500 },
			requirements: [
				{ requirementId: Research.Ion, level: 4 },
				{ requirementId: Research.Shield, level: 2 },
				{ requirementId: Building.Shipyard, level: 4 }
			]
		},
		{
			id: Defense.KineticCannon,
			resources: { metal: 10000, crystal: 1000 },
			requirements: [
				{ requirementId: Research.Electromagnet, level: 6 },
				{ requirementId: Research.Attack, level: 6 },
				{ requirementId: Building.Shipyard, level: 6 }
			]
		},
		{
			id: Defense.NaeriaTurret,
			resources: { metal: 25000, crystal: 10000 },
			requirements: [
				{ requirementId: Research.Plasma, level: 6 },
				{ requirementId: Research.Attack, level: 6 },
				{ requirementId: Building.Shipyard, level: 8 }
			]
		},
		{
			id: Defense.ShieldDome,
			resources: { metal: 5000, crystal: 2500 },
			requirements: [
				{ requirementId: Research.Shield, level: 3 },
				{ requirementId: Building.Shipyard, level: 4 }
			]
		},
		{
			id: Defense.HeavyShieldDome,
			resources: { metal: 15000, crystal: 5000 },
			requirements: [
				{ requirementId: Research.Shield, level: 6 },
				{ requirementId: Building.Shipyard, level: 4 }
			]
		}
	] satisfies RawDataEntry<Defense>[]),
	...([
		{
			id: Research.Energy,
			resources: { crystal: 1000 }
		},
		{
			id: Research.Electromagnet,
			resources: { metal: 1500, crystal: 500 },
			requirements: [{ requirementId: Research.Energy, level: 2 }]
		},
		{
			id: Research.Laser,
			resources: { metal: 500, crystal: 1500 },
			requirements: [
				{ requirementId: Research.Energy, level: 4 },
				{ requirementId: Building.ResearchCentre, level: 2 }
			]
		},
		{
			id: Research.Ion,
			resources: { metal: 1000, crystal: 5000 },
			requirements: [
				{ requirementId: Research.Energy, level: 6 },
				{ requirementId: Building.ResearchCentre, level: 4 }
			]
		},
		{
			id: Research.Plasma,
			resources: { metal: 10000, crystal: 25000 },
			requirements: [
				{ requirementId: Research.Energy, level: 8 },
				{ requirementId: Building.ResearchCentre, level: 6 }
			]
		},
		{
			id: Research.CombustionDrive,
			resources: { metal: 1000, crystal: 250, hydrogen: 500 },
			requirements: [
				{ requirementId: Research.Energy, level: 2 },
				{ requirementId: Building.ResearchCentre, level: 2 }
			]
		},
		{
			id: Research.IonDrive,
			resources: { metal: 2000, crystal: 2500, hydrogen: 250 },
			requirements: [
				{ requirementId: Research.Ion, level: 2 },
				{ requirementId: Building.ResearchCentre, level: 4 }
			]
		},
		{
			id: Research.ImpulseDrive,
			resources: { metal: 5000, crystal: 10000 },
			requirements: [
				{ requirementId: Research.Energy, level: 6 },
				{ requirementId: Building.ResearchCentre, level: 8 }
			]
		},
		{
			id: Research.WarpDrive,
			resources: { metal: 25000, crystal: 50000, hydrogen: 5000 },
			requirements: [
				{ requirementId: Research.Energy, level: 10 },
				{ requirementId: Building.ResearchCentre, level: 10 }
			]
		},
		{
			id: Research.Espionage,
			resources: { metal: 1000, hydrogen: 1000 },
			requirements: [
				{ requirementId: Research.CombustionDrive, level: 1 },
				{ requirementId: Building.ResearchCentre, level: 2 }
			]
		},
		{
			id: Research.Computing,
			resources: { crystal: 2500 },
			requirements: [{ requirementId: Building.ResearchCentre, level: 4 }]
		},
		{
			id: Research.Attack,
			resources: { metal: 2500, crystal: 2500, hydrogen: 1000 },
			requirements: [{ requirementId: Building.ResearchCentre, level: 6 }]
		},
		{
			id: Research.Shield,
			resources: { crystal: 10000 },
			requirements: [{ requirementId: Building.ResearchCentre, level: 6 }]
		},
		{
			id: Research.Hull,
			resources: { metal: 10000 },
			requirements: [{ requirementId: Building.ResearchCentre, level: 6 }]
		}
	] satisfies RawDataEntry<Research>[]),
	...([
		{
			id: Vehicle.CargoShip,
			resources: { metal: 2500, crystal: 250 },
			requirements: [{ requirementId: Research.CombustionDrive, level: 2 }],
			retrofits: [{ requirementId: Research.IonDrive, level: 6, retrofitId: Retrofit.IonDriveUpgrade }]
		},
		{
			id: Vehicle.HeavyCargoShip,
			resources: { metal: 10000, crystal: 500 },
			requirements: [
				{ requirementId: Building.Shipyard, level: 4 },
				{ requirementId: Research.CombustionDrive, level: 4 }
			],
			retrofits: [{ requirementId: Research.IonDrive, level: 8, retrofitId: Retrofit.IonDriveUpgrade }]
		},
		{
			id: Vehicle.InterceptorJet,
			resources: { metal: 1000, crystal: 250 },
			requirements: [{ requirementId: Research.CombustionDrive, level: 2 }],
			retrofits: [{ requirementId: Research.Electromagnet, level: 10, retrofitId: Retrofit.VanguardWeaponUpgrade }]
		},
		{
			id: Vehicle.Hivii,
			resources: { metal: 500, crystal: 15000, hydrogen: 1000 },
			requirements: [
				{ requirementId: Building.SpaceShipyard, level: 1 },
				{ requirementId: Research.CombustionDrive, level: 2 },
				{ requirementId: Research.Shield, level: 3 }
			],
			retrofits: [
				{ requirementId: Research.Energy, level: 6, retrofitId: Retrofit.SharedShield },
				{ requirementId: Research.Shield, level: 6, retrofitId: Retrofit.DualShield }
			]
		},
		{
			id: Vehicle.EspionageProbe,
			resources: { metal: 500, crystal: 1000 },
			requirements: [{ requirementId: Research.CombustionDrive, level: 2 }],
			retrofits: [{ requirementId: Research.IonDrive, level: 4, retrofitId: Retrofit.IonDriveUpgrade }]
		},
		{
			id: Vehicle.Fighter,
			resources: { metal: 1000, crystal: 250 },
			requirements: [
				{ requirementId: Building.Shipyard, level: 2 },
				{ requirementId: Research.CombustionDrive, level: 3 },
				{ requirementId: Research.Laser, level: 2 }
			]
		},
		{
			id: Vehicle.AdvancedFighter,
			resources: { metal: 2500, crystal: 500 },
			requirements: [
				{ requirementId: Building.Shipyard, level: 4 },
				{ requirementId: Research.CombustionDrive, level: 6 },
				{ requirementId: Research.Laser, level: 4 }
			],
			retrofits: [{ requirementId: Research.Laser, level: 6, retrofitId: Retrofit.VanguardWeaponUpgrade }]
		},
		{
			id: Vehicle.Cruiser,
			resources: { metal: 10000, crystal: 7500 },
			requirements: [
				{ requirementId: Building.Shipyard, level: 4 },
				{ requirementId: Research.IonDrive, level: 4 },
				{ requirementId: Research.Laser, level: 6 }
			],
			retrofits: [{ requirementId: Research.Laser, level: 8, retrofitId: Retrofit.VanguardWeaponUpgrade }]
		},
		{
			id: Vehicle.Battleship,
			resources: { metal: 25000, crystal: 7500 },
			requirements: [
				{ requirementId: Building.Shipyard, level: 6 },
				{ requirementId: Research.IonDrive, level: 6 },
				{ requirementId: Research.Laser, level: 8 }
			],
			retrofits: [{ requirementId: Research.Ion, level: 8, retrofitId: Retrofit.IonWeaponUpgrade }]
		},
		{
			id: Vehicle.Battlecruiser,
			resources: { metal: 35000, crystal: 10000 },
			requirements: [
				{ requirementId: Building.Shipyard, level: 6 },
				{ requirementId: Research.ImpulseDrive, level: 2 },
				{ requirementId: Research.Ion, level: 4 },
				{ requirementId: Research.Attack, level: 2 }
			]
		},
		{
			id: Vehicle.Bomber,
			resources: { metal: 50000, crystal: 7500 },
			requirements: [
				{ requirementId: Building.Shipyard, level: 8 },
				{ requirementId: Research.ImpulseDrive, level: 4 },
				{ requirementId: Research.Electromagnet, level: 10 },
				{ requirementId: Research.Attack, level: 4 }
			]
		},
		{
			id: Vehicle.Destroyer,
			resources: { metal: 100000, crystal: 15000 },
			requirements: [
				{ requirementId: Building.Shipyard, level: 10 },
				{ requirementId: Research.WarpDrive, level: 2 },
				{ requirementId: Research.Ion, level: 8 },
				{ requirementId: Research.Attack, level: 6 },
				{ requirementId: Research.Shield, level: 4 }
			]
		},
		{
			id: Vehicle.BallistaBomber,
			resources: { metal: 500000, crystal: 150000 },
			requirements: [
				{ requirementId: Building.SpaceShipyard, level: 10 },
				{ requirementId: Research.WarpDrive, level: 6 },
				{ requirementId: Research.Plasma, level: 8 },
				{ requirementId: Research.Attack, level: 8 },
				{ requirementId: Research.Shield, level: 6 }
			]
		},
		{
			id: Vehicle.BallistaDestroyer,
			resources: { metal: 500000, crystal: 350000 },
			requirements: [
				{ requirementId: Building.SpaceShipyard, level: 10 },
				{ requirementId: Research.WarpDrive, level: 6 },
				{ requirementId: Research.Plasma, level: 8 },
				{ requirementId: Research.Attack, level: 10 },
				{ requirementId: Research.Shield, level: 8 }
			]
		}
	] satisfies RawDataEntry<Vehicle>[])
];

interface RawDataEntry<Type extends DataEntryId = DataEntryId> {
	readonly id: Type;
	readonly requirements?: readonly RawDataEntryRequirement[];
	readonly retrofits?: readonly RawDataEntryRetrofit[];
	readonly resources?: Partial<DataEntryResources>;
}

type DataEntryId = Building | Research | Defense | Vehicle;

interface RawDataEntryRequirement<Item extends DataEntryId = DataEntryId> {
	readonly requirementId: Item;
	readonly level: number;
}

interface RawDataEntryRetrofit<Item extends DataEntryId = DataEntryId> extends RawDataEntryRequirement<Item> {
	readonly retrofitId: Retrofit;
}

const entries = new Collection<DataEntryId, DataEntry>();

{
	// Set the base requirements, so we can use them as a reference:
	for (const entry of requirements) {
		entries.set(entry.id, {
			id: entry.id,
			resources: {
				metal: entry.resources.metal ?? 0,
				crystal: entry.resources.crystal ?? 0,
				hydrogen: entry.resources.hydrogen ?? 0
			},
			requirements: { full: [], children: [] },
			retrofits: []
		});
	}

	// Set the requirements for each entry:
	for (const entry of requirements) {
		if (isNullishOrEmpty(entry.requirements) && isNullishOrEmpty(entry.retrofits)) continue;

		const base = entries.get(entry.id)!;
		for (const requirement of entry.requirements ?? []) {
			base.requirements.children.push({
				requirement: entries.get(requirement.requirementId)!,
				level: requirement.level
			});
		}

		for (const requirement of entry.retrofits ?? []) {
			base.retrofits.push({
				requirement: entries.get(requirement.requirementId)!,
				level: requirement.level,
				retrofitId: requirement.retrofitId
			});
		}
	}

	const ensureFullRequirements = (entry: DataEntry) => {
		// If an entry has no children, or already has full requirements, return them:
		if (entry.requirements.children.length === 0 || entry.requirements.full.length !== 0) {
			return entry.requirements.full;
		}

		const map = new Map<DataEntryId, DataEntryRequirement>();
		for (const child of entry.requirements.children) {
			// Add direct children to the map:
			const existing = map.get(child.requirement.id);
			if (isNullish(existing) || existing.level < child.level) {
				map.set(child.requirement.id, child);
			}

			// Add the children's recursive requirements to the map:
			for (const requirement of ensureFullRequirements(child.requirement)) {
				const existing = map.get(requirement.requirement.id);
				if (isNullish(existing) || existing.level < requirement.level) {
					map.set(requirement.requirement.id, requirement);
				}
			}
		}

		// Sort by requirement ID, makes it easier to test:
		const entries = [...map.values()].sort((a, b) => a.requirement.id - b.requirement.id);

		// Add the children to the full requirements:
		entry.requirements.full.push(...entries);
		return entry.requirements.full;
	};

	// Set the full deduplicated requirements for each entry:
	for (const entry of entries.values()) {
		ensureFullRequirements(entry);
	}
}

export function getEntryRequirements(id: DataEntryId) {
	return entries.get(id)!.requirements;
}

export function getLevelResourceRequirements(id: Building | Research, level: number): DataEntryResources {
	const { resources } = entries.get(id)!;
	// Assuming resources.metal is 2500, level 2 costs 5000, level 3 costs 10000, level 4 costs 20000, etc.
	const multiplier = 2 ** (level - 1);
	return {
		metal: resources.metal * multiplier,
		crystal: resources.crystal * multiplier,
		hydrogen: resources.hydrogen * multiplier
	};
}

export function getBuildingResourceRequirements(id: Defense | Vehicle, count: number): DataEntryResources {
	const { resources } = entries.get(id)!;
	return {
		metal: resources.metal * count,
		crystal: resources.crystal * count,
		hydrogen: resources.hydrogen * count
	};
}

export interface DataEntry<Type extends DataEntryId = DataEntryId> {
	readonly id: Type;
	readonly requirements: DataEntryRequirements;
	readonly retrofits: DataEntryRetrofit[];
	readonly resources: DataEntryResources;
}

export interface DataEntryRequirements {
	readonly full: DataEntryRequirement[];
	readonly children: DataEntryRequirement[];
}

export interface DataEntryResources {
	readonly metal: number;
	readonly crystal: number;
	readonly hydrogen: number;
}

export interface DataEntryRequirement<Item extends DataEntryId = DataEntryId> {
	readonly requirement: DataEntry<Item>;
	readonly level: number;
}

export interface DataEntryRetrofit<Item extends DataEntryId = DataEntryId> extends DataEntryRequirement<Item> {
	readonly retrofitId: Retrofit;
}
