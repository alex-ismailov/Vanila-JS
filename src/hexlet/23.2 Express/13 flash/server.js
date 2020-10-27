import Express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

import path from 'path';
// import encrypt from './encrypt.js';
// import User from './entities/User.js';
// import Guest from './entities/Guest.js';

import flash from 'flash';


const app = new Express();

app.use(morgan('combined'));
app.use(methodOverride('_method'));
app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: false }));
// app.use('/assets', Express.static(process.env.NODE_PATH.split(':')[0]));
app.use(session({
  secret: 'secret key',
  resave: false,
  saveUninitialized: false,
}));
app.use(flash());

/* local views directory location */
app.set('views', path.join(path.resolve(), 'src/hexlet/23.2 Express/13 flash/views'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/page', (req, res) => {
  // const item = req.params.item;
  console.log(req.query);
  res.flash(req.query.item, req.query.item);
  res.redirect('/show');
  // res.end(JSON.stringify(req.query));
});

app.get('/show', (req, res) => {
  res.render('alert');
})

const port = 8080;
app.listen(port, () => {
  console.log(`Server start on ${port}, ${new Date()}`);
});
