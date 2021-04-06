/* eslint-disable no-console */
// Start Server on Specified Port
const dotenv = require('dotenv');
const mongoose = require('mongoose');

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION!!! 💥 Shutting down');
  console.log(err.name, err.message);
  process.exit(1);
});
dotenv.config({ path: `${__dirname}/config.env` });

const app = require('./app');

const DB = process.env.DB_CLOUD_CONN_STRING.replace(
  '<password>',
  process.env.DB_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  // eslint-disable-next-line no-console
  .then(() => console.log(`Db connection successfully`));

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, (req, res) => {
  // eslint-disable-next-line no-console
  console.log(`Server Started and Listening on Port: ${PORT}`);
});

process.on('unhandlesRejectionPromise', err => {
  console.log('UNHANDLED REJECTION!  💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
