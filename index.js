let express = require('express');
let moment = require('moment');
let bodyParser = require('body-parser');

// Instantiate an express server
app = express();
// Tell the express instance to use bodyParser middleware and handle JSON
// requests. The handler req.body will now have a value set for the request body
// already parsed as a JSON object.
app.use(bodyParser.json());

// Requests to / simply print a bug free Hello World message
app.get('/', (req, res) => {
  res.send('Hello wold');
});

// GET requests to /api/time use momentjs (https://momentjs.com/) to display the
// date and time formatted.
app.get('/api/time', (req, res) => {
  const time = moment().format('DD/MMM/YYYY hh:mm');

  res.send(`The time is ${time}`);
});

// POST requests to /api/foobar/:id read the message from the request body JSON
// and the dynamic part of the URL "id" and respond with those values as a JSON
// object.
app.post('/api/foobar/:id', (req, res) => {
  const message = req.body.message;
  const id = req.params.id;

  res.json({
    message: `you gave me the message ${message} for id ${id}`
  });
});

// All our middleware and endpoints have been setup so start the express server
// instance listening on port 9000
app.listen(9000, () => {
  console.log('Express server running in port 9000');
});

