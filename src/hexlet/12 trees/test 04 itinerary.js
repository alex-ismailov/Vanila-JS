// import _ from 'lodash';

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

// const itinerary = (tree, dictionary, parent = null) => {
//   return tree.reduce((acc, node) => {
//     if (Array.isArray(node)) {
//       return [...acc, itinerary(node)];
//     }
//     return [...acc, node];
//   }, []);
// };

// const itinerary = (tree, dictionary, parent = null) => {
//   return tree.reduce((acc, node) => {
//     if (Array.isArray(node)) {
//       return itinerary(node);
//     }
//     console.log(node);
//     return ;
//   }, []);
// };

const itinerary = (tree, dictionary, parent = null) => {
  // const [node, children] = tree;
  // return tree.reduce((acc, node));



};

const makeAdjacencyList = (tree, dict, parent = null) => {
  const [node, branches] = tree;
  // console.log(branches);
  const children = [];
  dict[node] = [parent, children];
  if (!branches) {
    return node;
  }
  for (const branch of branches) {
    const name = makeAdjacencyList(branch, dict, parent = node);
    children.push(name);
  }
  return node;
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

/* testing */
// console.log(tree);
// console.log(itinerary(tree, {}));

const flat = {};
makeAdjacencyList(tree, flat);
console.log(flat);

// itinerary(tree, 'Dubna', 'Kostroma');
// ['Dubna', 'Tver', 'Moscow', 'Ivanovo', 'Kostroma']

// itinerary(tree, 'Borisovka', 'Kurchatov');
// ['Borisovka', 'Belgorod', 'Kursk', 'Kurchatov']

