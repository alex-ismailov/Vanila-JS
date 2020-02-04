import crc32 from 'crc-32'; 

/* hash */
const makeHash = () => [];
const getIndex = (key) => Math.abs(crc32.str(key) % 1000);
const set = (hash, key, value) => {
  const index = getIndex(key);
  if (hash[index]) {
    console.log('key already exists!');
    return false;
  }
  hash[index] = value;
  return true;
};

const get = (hash, key) => {
  const index = getIndex(key);
  if (hash[index]) {
    return hash[index];
  }
  return false;
};

/* testing */
console.log(getIndex('cat'));
console.log(getIndex('cat'));

const noteBook = makeHash();
console.log(noteBook);
console.log(set(noteBook, 'ivan ivanov', '123-45-67'));
console.log(noteBook);
console.log(noteBook.length);
console.log(set(noteBook, 'ivan ivanov', '123-45-67'));
console.log(get(noteBook, 'ivan ivanov'));
console.log(get(noteBook, 'vasya vasin'));
console.log(set(noteBook, 'vasya vasin', '555-55-55'));
console.log(get(noteBook, 'vasya vasin'));
console.log(noteBook);
console.log(noteBook.length);
