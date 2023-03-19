import type { Awaitable } from '@sapphire/utilities';
import { Client } from '@skyra/internal';
import { basename } from 'node:path';
import { fileURLToPath } from 'node:url';

export const Routes = new Map<Client.PayloadType, Route>();

export function registerRoute(url: string, route: Route) {
	const key = Client.PayloadType[basename(fileURLToPath(new URL(url)), '.js') as keyof typeof Client.PayloadType];
	Routes.set(key, route);
}

export interface Route {
	(userId: bigint, payload: Buffer): Awaitable<Buffer>;
}
