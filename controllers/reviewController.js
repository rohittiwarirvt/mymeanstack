const Review = require('../models/reviewModel');
const {
  createOne,
  updateOne,
  deleteOne,
  getOne,
  getAll
} = require('./factoryController');

exports.createReview = createOne(Review);
exports.getReview = getOne(Review);

exports.updateReview = updateOne(Review);
exports.deleteReview = deleteOne(Review);
exports.getAllReview = getAll(Review);
