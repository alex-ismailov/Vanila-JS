


const ast = {
  name: 'html',
  attributes: {},
  body: '',
  children: [
    {
      name: 'meta',
      attributes: {},
      body: '',
      children: [
        {
          name: 'title',
          attributes: {},
          body: 'hello, Hexlet!',
          children: [],
        },
      ],
    },
    {
      name: 'body',
      attributes: {},
      body: '',
      children: [Object]
    },
  ]
};

console.log(ast.children[0]);
// {
//   name: 'meta',
//   attributes: {},
//   body: '',
//   children: [ [Function: Object] ]
// }

console.log(ast.children[0].children); // =>
// [
//   {
//     name: 'title',
//     attributes: {},
//     body: 'hello, Hexlet!',
//     children: []
//   }
// ]
