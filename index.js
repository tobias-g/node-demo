let express = require('express');
let moment = require('moment');
let bodyParser = require('body-parser');

app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello wold');
});

app.get('/api/time', (req, res) => {
  const time = moment().format('DD/MMM/YYYY hh:mm');

  res.send(`The time is ${time}`);
});

app.post('/api/foobar/:id', (req, res) => {
  const message = req.body.message;
  const id = req.params.id;

  res.json({
    message: `you gave me the message ${message} for id ${id}`
  });
});

app.listen(9000, () => {
  console.log('Express server running in port 9000');
});

