const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const env = require('metalsmith-env');
const handlebarHelpers = require('metalsmith-register-helpers');



Metalsmith(__dirname)
  .metadata({
    title: "Static Test"
  })
  .source("../static/src/")
  .destination("../dist")
  .clean(true)
  .use(env())
  .use(handlebarHelpers({
    directory: "../static/handlebarHelpers"
  }))
  .use(markdown())
  .use(layouts({
    engine: 'handlebars',
    directory: "../static/layouts",
  }))
  .build(function (err, files) {
    if (err) {
      throw err;
    }
  })
