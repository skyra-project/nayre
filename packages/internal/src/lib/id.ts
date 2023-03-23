export enum Building {
	Quarry,
	Mine,
	HydrogenGenerator,
	GeothermalGenerator,
	FusionReactor,
	CondensationCentre,
	RobotFactory,
	AdvancedFactory,
	Shipyard,
	SpaceShipyard,
	ResearchCentre
}

export function isBuilding(id: number): id is Building {
	return id >= Building.Quarry && id <= Building.ResearchCentre;
}

export enum Research {
	Energy = 50,
	Electromagnet,
	Laser,
	Ion,
	Plasma,
	CombustionDrive,
	IonDrive,
	ImpulseDrive,
	WarpDrive,
	Espionage,
	Computing,
	Attack,
	Shield,
	Hull
}

export function isResearch(id: number): id is Research {
	return id >= Research.Energy && id <= Research.Hull;
}

export enum Defense {
	RailgunTurret = 100,
	LaserTurret,
	VanguardTurret,
	IonTurret,
	KineticCannon,
	NaeriaTurret,
	ShieldDome,
	HeavyShieldDome
}

export function isDefense(id: number): id is Defense {
	return id >= Defense.RailgunTurret && id <= Defense.HeavyShieldDome;
}

export enum Vehicle {
	CargoShip = 150,
	HeavyCargoShip,
	InterceptorJet,
	Hivii,
	EspionageProbe,
	Fighter,
	AdvancedFighter,
	Cruiser,
	Battleship,
	Battlecruiser,
	Bomber,
	Destroyer,
	BallistaBomber,
	BallistaDestroyer
}

export function isVehicle(id: number): id is Vehicle {
	return id >= Vehicle.CargoShip && id <= Vehicle.BallistaDestroyer;
}

export enum Retrofit {
	IonDriveUpgrade = 200,
	/** Upgrade over Ballistic Weapon, +30% attack */
	RailgunWeaponUpgrade = 210,
	/** Upgrade over Laser Weapon, +30% attack */
	VanguardWeaponUpgrade,
	/** Upgrade over Vanguard Weapon */
	IonWeaponUpgrade,
	/** Hivii exclusive, +50% shields */
	SharedShield = 220,
	/** Hivii exclusive, +50% shields */
	DualShield
}

export function isRetrofit(id: number): id is Retrofit {
	return id >= Retrofit.IonDriveUpgrade && id <= Retrofit.DualShield;
}
