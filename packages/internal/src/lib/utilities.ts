export function parsePlanetId(id: number) {
	return {
		system: Math.floor(id / 12),
		position: id % 12
	};
}

export function displayPlanetId(id: number) {
	return `${Math.floor(id / 12) + 1}:${(id % 12) + 1}`;
}

export function makePlanetId(system: number, position: number) {
	return system * 12 + position;
}
