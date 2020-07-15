import Connect from 'connect';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';

const app = new Connect();
const logger = morgan('combined');

app.use(methodOverride('_method'));
app.use(logger);
app.use(bodyParser.urlencoded({ extended: false }));

// respond to all requests
app.use('/page', (req, res) => {
  res.end('Hello from page, Mount middleware');
});

app.use((req, res) => {
  // res.send('Hello from Connect!');
  console.log('*************');
  console.log(Object.keys(res));
  console.log('*************');
  res.end(JSON.stringify(Object.keys(res)));
  // res.json(Object.keys(res));
});



const port = 8080;
app.listen(port);