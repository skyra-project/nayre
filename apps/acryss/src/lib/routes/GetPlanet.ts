import { prisma } from '#lib/prisma';
import { registerRoute } from '#lib/routes/base/Route';
import { isNullish } from '@sapphire/utilities';
import { Client, Server } from '@skyra/internal';

registerRoute(import.meta.url, async (userId, buffer) => {
	const data = Client.readGetPlanet(buffer);
	const planet = await prisma.planet.findUnique({ where: { id: data.id }, include: { owner: { select: { userId: true } } } });
	if (isNullish(planet)) return Server.writeError({ code: Server.ErrorCode.UnknownPlanet });
	if (planet.owner.userId !== userId) return Server.writeError({ code: Server.ErrorCode.InvalidPlayerId });
	return Server.writeOkGetPlanet({
		resources: {
			metal: planet.resourceMetal,
			crystal: planet.resourceCrystal,
			hydrogen: planet.resourceHydrogen,
			energy: planet.resourceEnergy,
			electronPlasma: planet.resourceElectronPlasma
		},
		buildings: {
			quarry: planet.buildingQuarry,
			mine: planet.buildingMine,
			hydrogenGenerator: planet.buildingHydrogenGenerator,
			geothermalGenerator: planet.buildingGeothermalGenerator,
			fusionReactor: planet.buildingFusionReactor,
			condensationCentre: planet.buildingCondensationCentre
		},
		facilities: {
			robotFactory: planet.facilityRobotFactory,
			advancedFactory: planet.facilityAdvancedFactory,
			shipyard: planet.facilityShipyard,
			spaceShipyard: planet.facilitySpaceShipyard,
			researchCentre: planet.facilityResearchCentre
		},
		defenses: {
			railgunTurret: planet.defenseRailgunTurret,
			laserTurret: planet.defenseLaserTurret,
			vanguardTurret: planet.defenseVanguardTurret,
			ionTurret: planet.defenseIonTurret,
			kineticCannon: planet.defenseKineticCannon,
			naeriaTurret: planet.defenseNaeriaTurret,
			shieldDome: planet.defenseShieldDome,
			heavyShieldDome: planet.defenseHeavyShieldDome
		},
		vehicles: {
			cargoShip: planet.vehicleCargoShip,
			heavyCargoShip: planet.vehicleHeavyCargoShip,
			interceptorJet: planet.vehicleInterceptorJet,
			hiivii: planet.vehicleHiivii,
			espionageProbe: planet.vehicleEspionageProbe,
			fighter: planet.vehicleFighter,
			advancedFighter: planet.vehicleAdvancedFighter,
			cruiser: planet.vehicleCruiser,
			battleship: planet.vehicleBattleship,
			battlecruiser: planet.vehicleBattlecruiser,
			bomber: planet.vehicleBomber,
			destroyer: planet.vehicleDestroyer,
			ballistaBomber: planet.vehicleBallistaBomber,
			ballistaDestroyer: planet.vehicleBallistaDestroyer
		}
	});
});
