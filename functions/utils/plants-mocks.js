const { v4: uuidv4 } = require("uuid");
const getRandomInt = require("./get-random-int");

const trees = [
  { name: "ash", cost: 1200 },
  { name: "willow", cost: 457 },
  { name: "maple", cost: 500 },
  { name: "hardwood", cost: 457 },
  { name: "pine", cost: 567 },
];

const flowers = [
  { name: "daisy", cost: 50 },
  { name: "rose", cost: 200 },
  { name: "mugwort", cost: 35 },
  { name: "camomile", cost: 39 },
  { name: "lavender", cost: 79 },
];

const shrubs = [
  { name: "pine", cost: 100 },
  { name: "hibiscus", cost: 200 },
  { name: "holly", cost: 300 },
  { name: "blackberry", cost: 400 },
  { name: "grape", cost: 500 },
];

const generatePlant = ({ name, cost }) => ({
  id: uuidv4(),
  name,
  cost,
  image: "some shit",
});

const PlantTypes = {
  shrubs: "shrubs",
  flowers: "flowers",
  trees: "trees",
};

const mocks = {
  [PlantTypes.shrubs]: shrubs,
  [PlantTypes.flowers]: flowers,
  [PlantTypes.trees]: trees,
};

const generatePlants = (type) => {
  const availablePlants = mocks[type];
  const makeNum = () => getRandomInt(availablePlants.length) || 1;

  return Array(makeNum())
    .fill("r")
    .reduce((memo, _, index) => {
      const plant = generatePlant(availablePlants[makeNum()]);
      return { ...memo, [plant.id]: plant };
    }, {});
};

const plants = {
  units: 20000,
  available: {
    tree: generatePlants(PlantTypes.trees),
    flower: generatePlants(PlantTypes.flowers),
    shrub: generatePlants(PlantTypes.shrubs),
  },
  purchasable: {
    tree: generatePlants(PlantTypes.trees),
    flower: generatePlants(PlantTypes.flowers),
    shrub: generatePlants(PlantTypes.shrubs),
  },
  garden: {
    tree: {},
    flower: {},
    shrub: {},
  },
};

module.exports = { plants, generatePlants };
