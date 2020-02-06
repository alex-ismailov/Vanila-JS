import { makeGraph, makeUser, getUser, addFriend, getFriendsOf } from '../myLib/graph/graphlib';
import { makeDeque, pushBack, popFront, isEmptyDeq } from '../myLib/graph/dequelib';

/* users creating */
const graph = makeGraph();
makeUser(graph, 'Alex Smile');
addFriend(graph, 'Alex Smile', 'Ksu Antesana');
addFriend(graph, 'Alex Smile', 'Vika Smile');

makeUser(graph, 'Ksu Antesana');
addFriend(graph, 'Ksu Antesana', 'Alex Smile');
addFriend(graph, 'Ksu Antesana', 'Vika Smile');

makeUser(graph, 'Vika Smile');
addFriend(graph, 'Vika Smile', 'Alex Smile');
addFriend(graph, 'Vika Smile', 'Ksu Antesana');

makeUser(graph, 'Bibin Mangom');
addFriend(graph, 'Vika Smile', 'Bibin Mangom');

/* deque */
const searchQueue = makeDeque();
const alexFriends = getFriendsOf(graph, 'Alex Smile');
pushBack(searchQueue, alexFriends);

const isSeller = (user) => {
  const lastChar = user[user.length - 1];
  return lastChar === 'm';
};

const wideSearch = (graph, userName, soughtFor) => {
  const searchQueue = makeDeque();
  const searched = [];
  const userFriends = getFriendsOf(graph, userName);
  pushBack(searchQueue, userFriends);
  while (!isEmptyDeq(searchQueue)) {
    const currUser = popFront(searchQueue);
    if (!searched.includes(currUser)) {
      if (isSeller(currUser)) {
        return `Uhu, this is mango seller! -> ${currUser}`
      }
      searched.push(currUser);
      const currUserFriends = getFriendsOf(graph, currUser);
      pushBack(searchQueue, currUserFriends);
    }
  }
  return false;
};

console.log(wideSearch(graph, 'Alex Smile', null));


/* testing */
// console.log(getFriendsOf(graph, 'Alex Smile'));
// console.log(getFriendsOf(graph, 'Ksu Antesana'));
// console.log(getFriendsOf(graph, 'Vika Smile'));
// console.log(graph);
