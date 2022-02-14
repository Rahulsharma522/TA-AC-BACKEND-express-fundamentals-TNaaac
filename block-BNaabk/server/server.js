var express = require('express');
var app = express();
app.get('/', (req, res) => {
  res.send('Hye Rahul !');
});
app.listen(3000, () => {
  console.log('server is listen in port 3000');
});