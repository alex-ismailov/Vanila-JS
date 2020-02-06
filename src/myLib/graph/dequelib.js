const makeDeque = () => [];


/* принимает массив друзей */
const pushBack = (whereTo, friends) => {
  whereTo.push(...friends);
};

const popFront = (whereFrom) => {
  const user =  whereFrom.shift();
  return user;
};

const isEmptyDeq = (deque) => deque.length === 0;

export {
  makeDeque, pushBack, popFront, isEmptyDeq,
};
