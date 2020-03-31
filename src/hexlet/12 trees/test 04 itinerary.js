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


const makeAdjacencyList = (tree, dict, parent = null) => {
  const [nodeName, branches] = tree;
  const children = [];
  dict[nodeName] = [parent, children];
  if (branches) {
    for (const branch of branches) {
      const name = makeAdjacencyList(branch, dict, parent = nodeName);
      children.push(name);
    }
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
  const iter = (from, to, route) => {
    if (from === to) {
      route.push(from);
      return route;
    }
    route.push(from);
    const [parent] = dict[from];
    return iter(parent, to, route);
  };
  return iter(from, to, []);
};

const getDownRoute = (from, to, dict) => {
  const iter = (from, to, route) => {
    if (from === to) {
      route.push(from);
      return route.reverse();
    }
    route.push(from);
    const [parent] = dict[from];
    return iter(parent, to, route);
  };
  return iter(from, to, []); 
};
const itinerary = (tree, from, to) => {
  const adjacencyList = {};
  makeAdjacencyList(tree, adjacencyList);
  const commonParent = getCommonParent(from, to, adjacencyList);

  // from -> commonParent -> to
  const upRoute = getUpRoute(from, commonParent, adjacencyList);
  const downRoute = getDownRoute(to, commonParent, adjacencyList);

  return _.uniq([...upRoute, ...downRoute]);
  // return upRoute;
  // return downRoute;
};

/* good */
// const getCommonParent = (first, second, dict) => {
//   const [parentName] = dict[first];
//   if (parentName === null) {
//     return first;
//   }
//   const parent = dict[parentName];
//   const [, parentChildren] = parent; 
//   if (parentChildren.includes(second)) {
//     return parentName;
//   }
//   return getCommonParent(parentName, second, dict);
// };
// ************


/* testing */
// console.log(tree);
// console.log(itinerary(tree, {}));



// console.log(getCommonParent('Borisovka', 'Kurchatov', flatTree));
// console.log(getCommonParent('Dubna', 'Kostroma', flatTree));


// console.log(flatTree.Borisovka);
// console.log(flatTree.Kurchatov);

console.log(itinerary(tree, 'Dubna', 'Kostroma'));
// ['Dubna', 'Tver', 'Moscow', 'Ivanovo', 'Kostroma']

console.log(itinerary(tree, 'Borisovka', 'Kurchatov'));
// ['Borisovka', 'Belgorod', 'Kursk', 'Kurchatov']
