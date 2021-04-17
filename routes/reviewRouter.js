const express = require('express');
const {
  getReview,
  createReview,
  updateReview,
  deleteReview,
  getAllReview,
  setTourUserIds
} = require('../controllers/reviewController');
const { protect, restrictTo } = require('../controllers/authController');

const router = express.Router({ mergeParams: true });

router.use(protect);

router
  .route('/')
  .get(getAllReview)
  .post(setTourUserIds, restrictTo('user', 'admin'), createReview);

router
  .route('/:id')
  .get(getReview)
  .patch(restrictTo('user', 'admin'), updateReview)
  .delete(restrictTo('user', 'admin'), deleteReview);

module.exports = router;
