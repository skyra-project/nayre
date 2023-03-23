import { Building, Client } from '../../../../src';

test('BuildingGet serializes and deserializes correctly', () => {
	const payload = {
		type: Client.PayloadType.BuildingGet,
		universeId: 254360814063058944n,
		planetId: 1,
		building: Building.Quarry
	} satisfies Client.BuildingGetPayload;

	const serialized = Client.writeBuildingGet(payload);
	expect(serialized).toBeInstanceOf(Buffer);

	const deserialized = Client.readBuildingGet(serialized);
	expect(deserialized).toStrictEqual(payload);
});
