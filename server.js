var express = require('express')
var routes = require('./routes')

var PORT = 3000
var app = express()

app.get('/', routes.index) 

app.listen(PORT, function() {
  console.log('The servers is listening on port ', PORT)
})
