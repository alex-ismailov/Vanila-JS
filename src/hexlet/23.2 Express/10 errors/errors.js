import Express from 'express';
import morgan from 'morgan';

const posts = [
  { id: 1, title: 'Post 1', body: 'Post 1 content' },
  { id: 2, title: 'Post 2', body: 'Post 2 content' },
  { id: 3, title: 'Post 3', body: 'Post 3 content' },
];

const app = new Express;
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('hello');
});

app.get('/posts/:id', (req, res, next) => {
  const post = posts.find((post) => post.id.toString() === req.params.id);
  if (post) {
    res.send(post);
  } else {
    next(new Error(`User with id: ${req.params.id} does not exist`));
  }
});

app.use((req, res) => {
  res.status('404')
  res.end('404');
});

// src: http://expressjs.com/ru/guide/error-handling.html#%D0%BE%D0%B1%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0-%D0%BE%D1%88%D0%B8%D0%B1%D0%BE%D0%BA
app.use((err, req, res, next) => {
  res.end(`404 - ${err.message}`);
});

app.listen(8080, () => {});