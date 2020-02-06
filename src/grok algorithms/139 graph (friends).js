import crc32 from 'crc-32';

const makeGraph = () => [];
const getIndex = (key) => Math.abs(crc32.str(key)) % 1000;
const display = (msg) => console.log(msg);
const isCollision = (graph, index, key) => {
  if (graph[index]) {
    const [currKey] = graph[index];
    if (currKey !== key) {
      return true;
    }
  }
  return false;
};

const makeUser = (graph, userName) => {
  const index = getIndex(userName);
  if (graph[index]) {
    display('Such name is already taken');
    return false;
  }
  /* в пустой массив после name в дальнейшем будут
  заносится друзья текущего пользователя */
  graph[index] = [userName, []];
  return true;
};

const getUser = (graph, userName) => {
  const index = getIndex(userName);
  if (!graph[index]) {
    display('user is not found');
    return false;
  }
  if (isCollision(graph, index, userName)) {
    display('collision detected!');
    return false;
  }
  /* возвращаем копию массива */
  return [...graph[index]];
};

const addFriend = (graph, userName, friend) => {
  const index = getIndex(userName);
  if (isCollision(graph, index, userName)) {
    display('collision detected!');
    return false;
  }
  graph[index][1].push(friend);
  return true;
};

/* testing */
const graph = makeGraph();
// console.log(getUser(graph, 'Alex Smile'));
console.log(makeUser(graph, 'Alex Smile'));
// console.log(makeUser(graph, 'Alex Smile'));
// console.log(getUser(graph, 'Alex Smile'));
console.log(addFriend(graph, 'Alex Smile', 'Ksu Antesana'));
// console.log(getUser(graph, 'Alex Smile'));
console.log(addFriend(graph, 'Alex Smile', 'Vika Smile'));
// console.log(getUser(graph, 'Alex Smile'));

console.log(makeUser(graph, 'Ksu Antesana'));
console.log(addFriend(graph, 'Ksu Antesana', 'Alex Smile'));
console.log(addFriend(graph, 'Ksu Antesana', 'Vika Smile'));

console.log(makeUser(graph, 'Vika Smile'));
console.log(addFriend(graph, 'Vika Smile', 'Alex Smile'));
console.log(addFriend(graph, 'Vika Smile', 'Ksu Antesana'));
// console.log(getIndex('ivan ivanov'));

console.log(getUser(graph, 'Alex Smile'));
console.log(getUser(graph, 'Ksu Antesana'));
console.log(getUser(graph, 'Vika Smile'));
console.log(graph);
