const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');
// middlewares
// include logger
const logger = require('./middleware/logger');
//include the file
const bootcamps = require('./routes/bootcamps');
const { connect } = require('mongoose');

// Load Env
dotenv.config({ path: './config/config.env' });

const app = express();

//use morgan dev middleware
if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

//connect to mongoose
connectDB();

// json parser
app.use(express.json());

app.use('/api/v1/bootcamps', bootcamps);

PORT = process.env.PORT || 5000;



const server = app.listen(
  PORT,
  console.log(`Server started for ${process.env.NODE_ENV} Environment for localhost on PORT ${PORT}`.yellow.bold)
);

// Handle  unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server and exit process
  server.close( () => process.exit(1));
});
