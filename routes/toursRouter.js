const express = require("express");
const {
  getALLTours,
  getATour,
  createTour,
  updateTour,
  deleteTour,
} = require("../controllers/tourController");
const routes = express.Router();

routes.route("/").get(getALLTours).post(createTour);

routes.route(":id").get(getATour).patch(updateTour).delete(deleteTour);

module.exports = routes;
