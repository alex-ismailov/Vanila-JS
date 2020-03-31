import _ from 'lodash';

// const obj = {
//   Moscow: [null, ['Smolensk', 'Yaroslavl', 'Voronezh', 'Ivanovo', 'Vladimir', 'Tver']],
//   Smolensk: ['Mscow', []],
//   Yaroslavl: ['Moscow', []],
//   Voronezh: ['Moscow', ['Liski', 'Boguchar', 'Kursk']],
//   Liski: ['Voronezh', []],
//   Boguchar: ['Voronezh', []],
//   Kursk: ['Voronezh', ['Belgorod', 'Kurchatov']],
//   Belgorod: ['Kursk', ['Borisovka']],
//   Borisovka: ['Belgorod', []],
//   Kurchatov: ['Kursk', []],
//   Ivanovo: ['Moscow', ['Kostroma', 'Kineshma']],
//   Kostroma: ['Ivanovo', []],
//   Kineshma: ['Ivanovo', []],
//   Vladimir: ['Moscow', []],
//   Tver: ['Moscow', ['Klin', 'Dubna', 'Rzhev']],
//   Klin: ['Tver', []],
//   Dubna: ['Tver', []],
//   Rzhev: ['Tver', []],
// };

const makeAdjacencyList = (tree, dict, parent = null) => {
  const [nodeName, branches] = tree;
  const children = [];
  dict[nodeName] = [parent, children];
  if (branches) {
    branches.forEach((branch) => {
      const name = makeAdjacencyList(branch, dict, nodeName);
      children.push(name);
    });
  }
  return nodeName;
};

const getCommonParent = (first, second, dict) => {
  const [parentName] = dict[first];
  if (parentName === null) {
    return first;
  }
  const parent = dict[parentName];
  const [, parentChildren] = parent;
  if (parentChildren.includes(second)) {
    return parentName;
  }
  return getCommonParent(parentName, second, dict);
};

const getUpRoute = (from, to, dict) => {
  const iter = (curr, route) => {
    if (curr === to) {
      route.push(curr);
      return route;
    }
    route.push(curr);
    const [parent] = dict[curr];
    return iter(parent, route);
  };
  return iter(from, []);
};

const getDownRoute = (from, to, dict) => {
  const iter = (curr, route) => {
    if (curr === to) {
      route.push(curr);
      return route.reverse();
    }
    route.push(curr);
    const [parent] = dict[curr];
    return iter(parent, route);
  };
  return iter(from, []);
};

const itinerary = (tree, from, to) => {
  const adjacencyList = {};
  makeAdjacencyList(tree, adjacencyList);
  const commonParent = getCommonParent(from, to, adjacencyList);
  const upRoute = getUpRoute(from, commonParent, adjacencyList);
  const downRoute = getDownRoute(to, commonParent, adjacencyList);

  return _.uniq([...upRoute, ...downRoute]);
};

/* testing */
const tree = ['Moscow', [
  ['Smolensk'],
  ['Yaroslavl'],
  ['Voronezh', [
    ['Liski'],
    ['Boguchar'],
    ['Kursk', [
      ['Belgorod', [
        ['Borisovka'],
      ]],
      ['Kurchatov'],
    ]],
  ]],
  ['Ivanovo', [
    ['Kostroma'], ['Kineshma'],
  ]],
  ['Vladimir'],
  ['Tver', [
    ['Klin'], ['Dubna'], ['Rzhev'],
  ]],
]];

console.log(itinerary(tree, 'Dubna', 'Kostroma'));
// ['Dubna', 'Tver', 'Moscow', 'Ivanovo', 'Kostroma']

console.log(itinerary(tree, 'Borisovka', 'Kurchatov'));
// ['Borisovka', 'Belgorod', 'Kursk', 'Kurchatov']
