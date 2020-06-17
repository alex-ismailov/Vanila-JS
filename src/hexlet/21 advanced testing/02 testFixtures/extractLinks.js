const re1 = /(?<=<a href=("|')).*?(?=\1)/g

export default (html) => {
  const res = html.match(re1);
  return res;
};
