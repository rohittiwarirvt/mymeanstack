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
const { protect, restrictTo } = require('./../controllers/authController');

const router = express.Router();

router.route('/top-five-tours').get(aliasTopTours, getALLTours);

router.get('/tour-stats', getTourStats);

router.get('/getmonthlyaverage/:year', getMonthlyAverage);
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
