const express = require('express');
const {
  getALLTours,
  getATour,
  createTour,
  updateTour,
  deleteTour,
  checkID,
  checkBody
} = require('../controllers/tourController');

const router = express.Router();

router.param('id', checkID);

router
  .route('/')
  .get(getALLTours)
  .post(checkBody, createTour);

router
  .route('/:id')
  .get(getATour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = router;
