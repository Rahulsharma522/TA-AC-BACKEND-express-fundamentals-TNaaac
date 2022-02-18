var express = require("express");
var logger = require('morgan');


var app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));


app.use((req, res, next) => {
  res.cookie('username', 'aman');
  next();
});

app.get("/" ,(req,res)=>{
    res.send("<h2>Welcome to express</h2>")
})
app.get("/about" ,(req,res)=>{
    res.send("my name is qwerty")
})

app.post("/json" ,(req , res)=>{

})
app.get('/form', (req,res) => {
    res.sendFile(__dirname + '/form.html')
})

app.post('/form', (req,res) => {
    res.send(req.body)
    console.log(req.body)

})
app.get('/users/:username', (req,res) => {
    let userName = req.params.username
    res.send(userName)
})

app.use((err,req,res,next) => {
    res.send(err)
})


app.listen(3000 ,()=>{
    console.log("server listener on port 3000");
})