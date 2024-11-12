const forest = [
	{
		region: "Marvel",
		creatures: [
			{
				name: "venom",
				type: "symbiotes",
				specialAbilities: ["strength", "agility", "durability"],
			},
			{
				name: "carnage",
				type: "symbiotes",
				specialAbilities: ["strength", "agility"],
			},
		],
	},
	{
		region: "DC",
		creatures: [
			{
				name: "para demons",
				type: "demons",
				specialAbilities: ["flying", "strength"],
			},
			{
				name: "swamp thing",
				type: "plant based",
				specialAbilities: ["shape shifting", "strength"],
			},
		],
	},
];

//search function

function findCreatures(criteria = {}) {
	const results = [];

	for (let region of forest) {
		for (let creature of region.creatures) {
			const typeMatches =
				!criteria.type || creature.type === criteria.type;
			const abilityMatches =
				!criteria.ability ||
				creature.specialAbilities.includes(criteria.ability);

			if (typeMatches && abilityMatches) {
				results.push({ ...creature, region: region.region });
			}
		}
	}

	return results;
}

const flying = findCreatures({ ability: "flying" });
console.log(flying);
