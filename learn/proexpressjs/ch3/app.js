var express = require('express');
var path = require('path');

var app = express();

var book = {
  name: 'Practical Node.js',
  publisher: 'Apress',
  keywords : 'node.js epress.js mongodb websocket oauth',
  discount : 'PNJS15'
}

console.log(app.get('env'));
app.set('view cache', true);
app.set('views', path.join(__dirname, 'views'));
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'jade');
app.set('trust proxy', true);
app.set('json callback name', 'cb');
app.set('json replacer', function(key, value){
  if (key == 'discount') {
    return undefined;
  } else {
    return value;
  }
});

app.set('json spaces', 4);
app.set('case sensitive routing', true);
app.set('strict routing', true);
app.set('x-powered-by', false);
app.set('subdomain offset', 3);
// app.disable('etag');
app.get('/jsonp', function(request, response){
  response.jsonp(book);
});
app.get('/json', function(request, response) {
  response.send(book);
});
app.get('/users', function(request, response) {
  response.send('users');
});

app.get('/users/', function(request, response){
  response.send('users/');
});

app.get('*', function(request, response){
  response.send('Pro Express JS configuration');
});

if ( app.get('env') == 'development') {
  app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    })
  })
}

var server = app.listen(app.get('port'), function(req, res){
  console.log("Express server listening on port " + server.address()+ app.get('port'));
});
