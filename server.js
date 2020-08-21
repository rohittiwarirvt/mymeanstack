const express = require('express');
const dotenv = require('dotenv');

// Load Env
dotenv.config({ path: "./config/config.env" });

const app = express();

PORT = process.env.PORT || 5000;


app.get('/api/v1/bootcamps', (req, res) => {
  res.status(200).json({ success: true, msg: `Get All Bootcamps` });
});

app.get("/api/v1/bootcamps/:id", (req, res) => {
  res.status(200).json({ success: true, msg: `Get Bootcamp with id ${req.params.id}` });
});

app.post("/api/v1/bootcamps", (req, res) => {
  res.status(201).json({ success: true, msg: `Create A Bootcamp` });
});

app.put("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update Bootcamp with id ${req.params.id}` });
});

app.delete("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete Bootcamp with id ${req.params.id}` });
});
app.listen(
  PORT,
  console.log(`Server started for ${process.env.NODE_ENV} Environment for localhost on PORT ${PORT}`)
);
