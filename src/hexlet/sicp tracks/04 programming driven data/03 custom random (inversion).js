const customRandom = (cardIndex, minIndex, maxIndex) => {
  return () => {
    if (cardIndex > maxIndex) {
      cardIndex = minIndex;
    }
    
    const currentIndex = cardIndex;
    cardIndex += 1;
    return currentIndex;

  }
};

/* testing */
const getIndex = customRandom(0, 0, 3);
for (let i = 0; i < 8; i += 1) {
  console.log(getIndex());
}