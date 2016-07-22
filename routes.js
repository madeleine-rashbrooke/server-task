module.exports = {
  // index: index,
  login: login,
  home: home
}

// function index (req, res) {
//   res.send('<h1>Hello world</h1>')
// }

function login (req, res) {
  var name = req.query.name
  res.send('Welcome ' + name )
}

function home (req, res) {
  res.sendFile(__dirname + '/index.html')
}
