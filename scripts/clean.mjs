import { rm } from 'node:fs/promises';

const rootDir = new URL('../', import.meta.url);
const appsDir = new URL('apps/', rootDir);
const options = { recursive: true, force: true };

const paths = [
	// Dist folders
	new URL('acryss/dist/', appsDir),
	new URL('nayre/dist/', appsDir),
	new URL('frontend/dist/', appsDir)
];

await Promise.all(paths.map((path) => rm(path, options)));
