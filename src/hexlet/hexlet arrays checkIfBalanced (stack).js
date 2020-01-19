/* 
  Задача:
  Необходимо реализовать функцию, которая проверяет, что парные символы сбалансированы.
  То есть каждый открывающий символ имеет закрывающий, и они не перекрываются,
  например так [{]}. К таким символам в нашем случае относятся <>, {}, () [].
  Входом в функцию может быть ()<>{}. Такой пример проходит проверку,
  а вот этот уже нет: [({)}]. Здесь происходит перекрытие фигурных и круглых скобок.
*/

const checkIfBalanced = (expression) => {
  const stack = [];
  const symbols = expression.split('');
  const startSymbols = ['{', '(', '<', '['];
  const pairs = ['{}', '()', '<>', '[]'];
  console.log(symbols);
  for (const currentSymbol of symbols) {
    if (startSymbols.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      const previousSymbol = stack.pop();
      const pair = `${previousSymbol}${currentSymbol}`;
      if (!pairs.includes(pair)) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// testing
console.log(checkIfBalanced('['));
console.log(checkIfBalanced('}{'));
console.log(checkIfBalanced('(([<>]){})'));
console.log(checkIfBalanced('([{]})'));
