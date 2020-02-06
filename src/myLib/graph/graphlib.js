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

const getFriendsOf = (graph, userName) => {
  const user = getUser(graph, userName);
  const [, friends] = user;
  return friends;
};

export {
  makeGraph, makeUser, getUser, addFriend, getFriendsOf,
};
