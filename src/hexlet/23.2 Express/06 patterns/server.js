import Express from 'express';
import path from 'path';

export default (port) => {
  const app = new Express();

  app.set('view engine', 'pug');
  app.set('views', path.join(path.resolve(), 'src/hexlet/23.2 Express/06 patterns'));

  app.get('/', (req, res) => {
    const data = { title: 'Hey', message: 'pattern from pug!' };
    res.render('index', data);
  });

  app.get('/page', (req, res) => {
    const data = { title: 'Page' };
    res.render('page - extends layout', data);
  });

  app.get('/includePage', (req, res) => {
    const data = { title: 'Lame site', text: 'Welcome ti my super lame site' };
    res.render('includePage', data);
  });

  app.listen(port);
};
