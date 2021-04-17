const Review = require('../models/reviewModel');
const {
  createOne,
  updateOne,
  deleteOne,
  getOne,
  getAll
} = require('./factoryController');

exports.setTourUserIds = (req, res, next) => {
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;
  next();
};
exports.createReview = createOne(Review);
exports.getReview = getOne(Review);

exports.updateReview = updateOne(Review);
exports.deleteReview = deleteOne(Review);
exports.getAllReview = getAll(Review);
