const express = require('express');
const dotenv = require('dotenv');

// Load Env
dotenv.config({ path: "./config/config.env" });

const app = express();

PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server started for ${process.env.NODE_ENV} Environment for localhost on PORT ${PORT}`)
);
