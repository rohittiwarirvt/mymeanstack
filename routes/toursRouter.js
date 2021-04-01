const express = require('express');
const {
  getALLTours,
  getATour,
  createTour,
  updateTour,
  deleteTour,
  getMonthlyAverage,
  getTourStats,
  aliasTopTours
} = require('../controllers/tourController');

const router = express.Router();

router.route('/top-five-tours').get(aliasTopTours, getALLTours);

router.get('/tour-stats', getTourStats);

router.get('/getmonthlyaverage/:year', getMonthlyAverage);
router
  .route('/')
  .get(getALLTours)
  .post(createTour);

router
  .route('/:id')
  .get(getATour)
  .patch(updateTour)
  .delete(deleteTour);

module.exports = router;
