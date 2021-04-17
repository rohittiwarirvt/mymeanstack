const express = require('express');
const {
  getALLTours,
  getATour,
  createTour,
  updateTour,
  deleteTour,
  getMonthlyAverage,
  getTourStats,
  aliasTopTours,
  getToursWithin,
  getDistances
} = require('../controllers/tourController');
const { protect, restrictTo } = require('./../controllers/authController');
const reviewRouter = require('./reviewRouter');

const router = express.Router();

router.use('/:tourId/reviews', reviewRouter);

router.route('/top-five-tours').get(aliasTopTours, getALLTours);

router.get('/tour-stats', getTourStats);

router.get('/getmonthlyaverage/:year', getMonthlyAverage);

// /tours-within/233/center/  36.11639003434034,-120.38437132181687,/unit/mi
router.get('/tours-within/:distance/center/:latlng/unit/:unit', getToursWithin);
router.get('/distances/:latlng/unit/:unit', getDistances);

router
  .route('/')
  .get(protect, getALLTours)
  .post(createTour);

router
  .route('/:id')
  .get(getATour)
  .patch(updateTour)
  .delete(protect, restrictTo('admin', 'lead-guide'), deleteTour);

module.exports = router;
