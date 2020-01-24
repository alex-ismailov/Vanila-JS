const stringGenerator_Bad = (coll) => {
  let result = '';
  for (const item of coll) {
      result += `<li>${item}</li>`;
      // либо так:
      // result = `${result}<li>${item}</li>`;
  }
  return result = `<ul>${result}</ul>`;
};

/* Такой способ вполне рабочий, но для большинства языков программирования 
максимально неэффективный. Дело в том, что конкатенация и интерполяция порождают
новую строчку вместо старой, — и подобная ситуация повторяется на каждой итерации.
Причём строка становится всё больше и больше. Копирование строк приводит к серьёзному
расходу памяти и может влиять на производительность. Конечно, для большинства приложений
данная проблема неактуальна из-за малого объёма прогоняемых данных,
но более эффективный подход не сложнее в реализации и обладает преимуществами (см. далее).
Поэтому стоит сразу приучить себя работать правильно и никогда больше не возвращаться
к этому вопросу. */

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