import {
	Building,
	DataEntryResources,
	Defense,
	getBuildingResourceRequirements,
	getEntryRequirements,
	getLevelResourceRequirements,
	type DataEntryRequirements
} from '../../src/index.js';

describe('getEntryRequirements', () => {
	test('GIVEN Building.Quarry THEN returns the correct requirements', () => {
		expect(getEntryRequirements(Building.Quarry)).toStrictEqual<DataEntryRequirements>({
			full: [],
			children: []
		});
	});
});

const defaults = { metal: 0, crystal: 0, hydrogen: 0 } as const;
describe('getLevelResourceRequirements', () => {
	test('GIVEN Building.Quarry THEN returns the correct requirements', () => {
		expect(getLevelResourceRequirements(Building.Quarry, 1)).toStrictEqual<DataEntryResources>({ ...defaults, metal: 200 });
		expect(getLevelResourceRequirements(Building.Quarry, 2)).toStrictEqual<DataEntryResources>({ ...defaults, metal: 400 });
		expect(getLevelResourceRequirements(Building.Quarry, 3)).toStrictEqual<DataEntryResources>({ ...defaults, metal: 800 });
		expect(getLevelResourceRequirements(Building.Quarry, 4)).toStrictEqual<DataEntryResources>({ ...defaults, metal: 1600 });
	});
});

describe('getBuildingResourceRequirements', () => {
	test('GIVEN Building.Quarry THEN returns the correct requirements', () => {
		expect(getBuildingResourceRequirements(Defense.RailgunTurret, 1)).toStrictEqual<DataEntryResources>({ ...defaults, metal: 500 });
		expect(getBuildingResourceRequirements(Defense.RailgunTurret, 10)).toStrictEqual<DataEntryResources>({ ...defaults, metal: 5000 });
	});
});
