const makeDeque = () => [];


/* принимает массив друзей */
const pushBack = (whereTo, friends) => {
  whereTo.push(...friends);
};

const popFront = (whereFrom) => {
  const user =  whereFrom.shift();
  return user;
};

export {
  makeDeque, pushBack, popFront,
};
