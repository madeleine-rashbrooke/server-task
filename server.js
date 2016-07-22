var routes = require('./routes')
var express = require('express')


var PORT = 3000
var app = express()

// app.get('/', routes.index(req, res))
app.get('/login', routes.login)
app.get('/home', routes.home)

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(PORT, function() {
  console.log('The servers is listening on port ', PORT)
})
