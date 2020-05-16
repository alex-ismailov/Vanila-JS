import { promises as fs } from 'fs';

const promise = fs.readFile('unkownfile');
promise.catch((e) => console.log('error!!!', e));

/* catch, в свою очередь, возвращает promise, что позволяет коду восстанавливать
работу после ошибок и продолжать цепочку. Вполне нормально писать код в стиле цепочки, 
в которой чередуются then и catch: */

const promise2 = fs.readFile('unkownfile')
  .catch((e) => console.log('error!!!', e))
  .then(() => fs.readFile('anotherUnkownfile'))
  .catch(console.log);

/*   В большинстве ситуаций не имеет значения, на какой из операций возникла ошибка.
  Любое "падение" должно прерывать текущее выполнение и уходить в блок обработки
  ошибки. Именно так работает код с try/catch, и такое же поведение эмулируется
  промисами. Дело в том, что, если возникла ошибка, то она передаётся по цепочке
  первому встреченному catch, а все встречающиеся на пути then игнорируются.
  Поэтому код выше можно упростить так: */

const promise3 = fs.readFile('unkownfile')
  .then(() => fs.readFile('anotherUnknownFile'))
  .catch(console.log);

/* Иногда ошибку нужно генерировать самостоятельно.
Самый простой способ сделать это — бросить исключение.
К этому тоже надо привыкнуть. try/catch использовать нельзя (потому что бесполезно),
а вот бросать исключения можно. Промис сам их преобразует, как надо, и
отправит по цепочке в поиске вызова catch: */

const promise4 = fs.readFile('unkownfile')
  .then((data) => {
    // делаем что нибудь
    throw new Error('boom!');
  })
  .then(() => {
    // Этот then не будет вызван, из—за исключения на предыдущем шаге
  })
  .catch(console.log);

/* Другой способ вернуть результат вызова функции — Promise.reject,
внутрь которой передаётся сама ошибка: */
const promise5 = fs.readFile('src/hexlet/17 Asynchronous programming/myfile.txt')
  .then((data) => {
    // делаем что нибудь
    return Promise.reject(new Error('boom!'));
  })
  .catch(console.log);


/* Помимо чисто технических моментов в обработке ошибок есть и архитектурно-организационные.
Если вам приходится реализовывать асинхронные функции, которыми будут пользоваться другие люди,
то никогда не подавляйте ошибки: */
const readFileEasily = (filepath) => fs.readFile(filepath).catch(console.log);
readFileEasily('unknownfile');

/* Перехватив ошибку, вы не оставляете шансов узнать о ней вызывающему коду.
Тот, кто использует эту функцию, не сможет отреагировать на ошибочную ситуацию.
Если обработка ошибки всё же нужна — обрабатывайте, но не забывайте генерировать её снова: */

const readFileEasily = (filepath) => fs.readFile(filepath)
  .catch((e) => {
    console.log(e); // В библиотеках так делать нельзя, только в своем коде
    throw e;
  });

// Теперь вызывающий код может обработать ошибку:

readFileEasily('path/to/file').catch(console.log);