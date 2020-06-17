import fs from 'fs';
import path from 'path';

import extractLinks from '../extractLinks';

test('extractLinks', async () => {
  const html = await fs.readFile(`${__dirname}__fixtures__/index.html`, 'utf-8');
  const links = extractLinks(html);
  expect(links).toEqual(['/resumes/1', '/users/6']);
});

// test('extractLinks', async () => {
//   // HTML находится в файле withLinks.html в директории __fixtures__ 
//   // При чтении текстовых файлов, в конце может добавляться пустая строка.
//   // Она удаляется с помощью метода `trim`, если нужно
//   // __dirname – директория, в которой находится данный файл с тестами
//   const html = await fs.readFile(`${__dirname}/../__fixtures__/withLinks.html`, 'utf-8');
//   // Теперь с HTML удобно работать и он не загромождает тесты.
//   const links = extractLinks(html);
//   expect(links).toEqual(['/resumes/1', '/users/6']);
// });

/* Когда фикстур больше одной, то в коде тестов начинает появляться много похожих вызовов, считывающих файлы,
В таком случае лучше вынести построение пути в отдельную функцию, а заодно воспользоваться правильным способом
склеивания путей: */
// test('extractLinks', async () => {
//   const getFixturePath = (filename) => path.join(__dirname, '/__fixtures__/', filename);
//   const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');
//   const html = await readFile('index.html');
//   const html2 = await readFile('someAnother.html');

//   const links = extractLinks(html);
//   expect(links).toEqual(['/resumes/1', '/users/6']);

//   const links2 = extractLinks(html2);
//   expect(links2).toEqual(['/link1', '/link2']);
// });
