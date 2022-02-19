var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(__dirname + '/pubic'));
app.use(logger('dev'));
app.use((req, res, next) => {
  res.cookie('username', 'Rahul');
  next();
});

app.put('/', (req, res) => {
  res.json(req.body);
});
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(3000, () => {
  console.log('express server listening on port 3000');
});