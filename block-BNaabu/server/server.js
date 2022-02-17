var express = require('express');
var logger = require('morgan');
var app = express();
app.use(logger('div'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  if (req.url === 'admin') {
    return next('Unauthorized');
  }
  next();
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/about', (req, res) => {
  res.send('About page');
});

app.use((req, res, next) => {
  res.send('page not found');
});
app.use((err, req, res, next) => {
  res.send(err);
});
app.listen(3000, () => {
  console.log('server listening on port 3k');
});