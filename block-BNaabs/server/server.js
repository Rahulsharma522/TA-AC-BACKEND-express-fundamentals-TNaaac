var express = require('express');
var logger = require('morgan');
var app = express();

app.use(logger('combined'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.get('/users/:username', (req, res) => {
  let userName = req.params.username;
  res.send(userName);
});

app.post('/new', (req, res) => {
  res.json(req.body);
});

app.listen(3000, () => {
  console.log('server listening on port 3k');
});