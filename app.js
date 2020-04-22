const express = require('express');
const numberService = require('./index');

const port = process.env.PORT || 3000;
const app = express();

//express server

app.all('/list', (req, resp) => {
  console.log(req.query.list, numberService);


  var list = numberService.getList(parseInt(req.query.list));

  resp.setHeader('Content-Type', 'application/json');
  resp.end(JSON.stringify(list));
});

app.all('/number', (req, resp) => {
  console.log(req, "resp", resp);

  var sequence = numberService.getNumber(parseInt(req.query.number));

  resp.setHeader('Content-Type', 'application/json');
  resp.end(JSON.stringify(sequence));
});

app.all('/fibonacci', (req, resp) => {
  console.log(req, "resp", resp);

  resp.setHeader('Content-Type', 'application/json');
  resp.end(JSON.stringify("A series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. The simplest is the series 1, 1, 2, 3, 5, 8, etc."));
});

// Start server
app.listen(port, () => {
    console.log('Express server started on port ' + port);
})
