import Express from 'express';
import { promises as fs } from 'fs';
import path from 'path';

import Router from 'named-routes';

const app = new Express();
const router = new Router();
router.extendExpress(app);
router.registerAppHelpers(app);

const users = {
  1: {
    alex: '123-45-46',
  },
  2: {
    ksu: '654-32-21',
  },
  3: {
    vika: '789-45-61',
  },
};

app.get('/', (req, res) => {
  res.send('Hello from my First Express server');
});

app.get('/phonebook', async (req, res) => {
  const phonebook = await fs.readFile(path.join(path.resolve(), 'src/hexlet/23.2 Express/02 routes/phonebook.txt'), 'utf-8');
  res.send(phonebook);
});

app.get('/users/:userId/books/:id', (req, res) => {
  const { userId, id } = req.params;
  res.send(`userId: ${userId}, book id: ${id}`);
});

app.get('/admin/users/:id', 'admin.user', (req, res) => {
  const path = app.namedRoutes.build('admin.user', { id: 1 });
  res.send(path);
});

app.get('/admin', 'admin', (req, res) => {
  const path = app.namedRoutes.build('admin.user', { id: 31 });
  res.send(path);
});

app.get('/users', (req, res) => {
  const { id } = req.query;
  const parsedId = Number(id);
  res.status(200);
  res.send(users[parsedId]);
});

app.get('/get_users', (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

// curl localhost:3000 // => Hello from my First Express server
