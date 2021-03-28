const fs = require("fs");
const express = require("express");
const morgan = require("morgan");
const tourRouter = require("./routes/toursRouter");
const app = express();

// middleware
app.use(morgan("dev"));

app.use(express.json());

// Get Files

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const homeHandler = (req, res) => {
  res.json({
    message: "This is a natours app from server side",
    app: "Natours",
  });
};

app.route("/").get(homeHandler);

app.route("/api/v1/tours/", tourRouter);

// Start Server on Specified Port

const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log(`Server Started and Listening on Port: ${PORT}`);
});
