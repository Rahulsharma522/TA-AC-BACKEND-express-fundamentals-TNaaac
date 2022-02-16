var express = require('express');
var cookieparser = require('cookie-parser');
var logger = require('morgan');

var app = express();
app.use(logger('div'));
app.use(cookieparser());
app.use((req, res, next) => {
  console.log(req.cookies);
  res.cookie('username', 'Rahul');
  next();
});
app.use(express.json());
app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(4000, () => {
  console.log('server listening on port 4k');
});