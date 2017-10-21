const webpackDev = require('webpack-dev-middleware');
const webpackHot = require('webpack-hot-middleware');
const express = require('express');
const path = require('path');
const webpack = require('webpack');
var env = process.env.ENV;
console.log(`Running devServer with environment = ${env}`);
if (env == 'dev') {
  var config = require('../config/webpack.config.js');
}

const app = express();
const compiler = webpack(config);


// Set up the dev middleware with the webpack public path

app.use(webpackDev(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

// Add the hot reloader
app.use(webpackHot(compiler));

// Set up the static files and are build in the distribution folder. This is relative to the folder 'node' is called
app.use(express.static('./dist'));

// If react, react-router, or the static page routes don't handle a request, then return the index.html file.
// The file is actually living in memory and not on disk (like the static files are), so get it out
// of the compiler and return it.
app.use("*", (req, reqs, next) => {

  const filename = path.join(compiler.outputPath, "index.html");
  console.log(`test ${compiler}`)
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set("content-type", "text/html");
    res.send(result);
  })
});


app.listen(8080, "local.fblearn.com", (err) => {
  if(err) {
    console.log(err);
    return;
  }
  console.log("Listenning to local.fblearn.com");
})
