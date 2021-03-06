import fs from 'fs';

// Обязательно передавать вторым параметром `utf-8`,
// только тогда данные возвратятся в строковом представлении
const content = fs.readFileSync('src/hexlet/17 Asynchronous programming/myfile.txt', 'utf-8');
fs.writeFileSync('src/hexlet/17 Asynchronous programming/myfile-copy.txt', content);

/* Теперь попробуем прийти к асинхронному коду через понимание принципов его работы.
Представим, что функция readFile в примере ниже асинхронная.
Это значит, что она читает файл не прямо в том месте, где её вызвали, а
где-то в другом месте на фоне: */

// пустая функция, чуть позже разберём её смысл,
// но асинхронная версия readFile требует передачи функции третьим параметром
// const noop = () => {};
// const content2 = fs.readFile('./myfile', 'utf-8', noop);
// console.log(content2); // undefined

/* right way */
const callback = (_error, data) => console.log(data);
// readFile запускает на выполнение задачу чтения файла.
// Вторым параметром обязательно передать utf-8. Только в этом случае данные прочитаются в строковом виде.
fs.readFile('src/hexlet/17 Asynchronous programming/myfile.txt', 'utf-8', callback);

/* Как только операция чтения файла завершилась, интерпретатор Node.js внутри себя
вызвал колбек, передав ему параметром содержимое файла. Осталось убедиться в том, что
этот код действительно асинхронный: */
console.log('--------------');
console.log('before read');
// вызов функции не дожидается конца чтения файла, код сразу продолжит выполняться дальше
fs.readFile('src/hexlet/17 Asynchronous programming/myfile.txt', 'utf-8', callback);
console.log('after read?');


/* Теперь мы видим запуск двух асинхронных операций, мы знаем, что
второе чтение файла запустится практически одновременно с первым, так как
операции асинхронные и их выполнение не блокирует поток выполнения программы.
Попробуйте ответить на вопрос, в каком порядке появится результат? */
console.log('--------------');
fs.readFile('./myfile', 'utf-8', (_error, data) => console.log('First!'));
fs.readFile('./myfile', 'utf-8', (_error, data) => console.log('Second!'));
/* Как видите, на этот вопрос нельзя дать однозначный ответ.
Асинхронные операции могут выполниться в любом порядке, если они запускаются
одновременно. И единственный способ упорядочить их — делать последовательный запуск,
и об этом мы поговорим далее. */

