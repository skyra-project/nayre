export function shuffle<T>(array: T[]): T[] {
	let m = array.length;
	while (m) {
		const i = Math.floor(Math.random() * m--);
		[array[m], array[i]] = [array[i], array[m]];
	}
	return array;
}

export function random(minimum: number, maximum: number) {
	return Math.floor(Math.random() * (maximum - minimum) + minimum);
}
