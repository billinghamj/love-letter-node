/* eslint-disable no-magic-numbers */

const typeNames = new Set([
	'guard',
	'priest',
	'baron',
	'handmaid',
	'prince',
	'king',
	'countess',
	'princess',
]);

export const types = {};

for (const typeName of typeNames) {
	Object.defineProperty(types, typeName, {
		value: Symbol(typeName),
		writable: false,
	});
}

export const counts = new Map([
	[types.guard, 5],
	[types.priest, 2],
	[types.baron, 2],
	[types.handmaid, 2],
	[types.prince, 2],
	[types.king, 1],
	[types.countess, 1],
	[types.princess, 1],
]);
