import Express from 'express';
import morgan from 'morgan';

const app = new Express;
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('hello');
});

app.use((req, res) => {
  res.status('404')
  res.end('404');
})

app.listen(8080, () => {});