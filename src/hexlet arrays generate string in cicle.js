const stringGenerator_Bad = (coll) => {
  let result = '';
  for (const item of coll) {
      result += `<li>${item}</li>`;
      // либо так:
      // result = `${result}<li>${item}</li>`;
  }
  return result = `<ul>${result}</ul>`;
};

const stringGenerator_Good = (coll) => {
  const parts = [];
  for (const item of coll) {
    parts.push(`<li>${item}</li>`);
  }
  const stringOfLiItems = parts.join('');
  const result = `<ul>${stringOfLiItems}</ul>`;
  return result;
};


// testing
const coll = ['milk', 'butter', 'eggs', 'bread'];
console.log(stringGenerator_Bad(coll));
console.log(stringGenerator_Good(coll));