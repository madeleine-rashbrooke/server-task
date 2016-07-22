var test = require('tape')
var routes = require('./routes')

test('routes.index responds with Hello World', function (t) {
  var res = { send: send}

  routes.index(null, res)

  function send (msg) {
  t.equals(msg, '<h1>Hello world</h1>')
  t.end()
  }
})

test('routes.login response includes a querystring parameter', function (t) {
  var res = {send: send}
  var req = { query: {name: 'Daisy'} }

  routes.login(req, res)

  function send (msg) {
    t.equals(msg, 'Welcome Daisy')
    t.end()
  }
})

test('routes.home responds with index.html', function (t) {
  var res = { sendFile: sendFile }

  routes.index(null, res)

  function sendFile (file) {
    t.equals(file, 'index.html')
    t.end()
  }
})
