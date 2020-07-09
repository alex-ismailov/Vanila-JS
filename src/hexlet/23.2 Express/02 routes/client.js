import axios from 'axios';
import { resolve } from 'url';

const paths = [
  '/phonebook',
  '/users/1/books/3',
  '/admin/users/1',
  '/admin',
];

const baseUrl = 'http://localhost:3000';

const pathsTest = (paths) => {
  const promises = paths.map((path) => {
    const reqUrl = resolve(baseUrl, path);
    return axios.get(reqUrl);
  });
  promises.map((promise) => promise.then(({ data }) => console.log(data)));
};

pathsTest(paths);
