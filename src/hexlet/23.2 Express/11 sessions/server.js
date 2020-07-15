import Express from 'express';
import session from 'express-session';

const app = new Express();
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'keyboard cat', // necessarily
}));

app.get('/increment', (req, res) => {
  req.session.counter = req.session.counter || 0;
  if (req.session.counter > 5) {
    req.session.destroy((err) => err);
    res.end();
    return;
  }

  console.log(req.session.counter);
  req.session.counter += 1;
  res.end();
});

app.listen(8080);