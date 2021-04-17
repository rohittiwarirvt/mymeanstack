const Tour = require('./../models/tourModel');
const {
  createOne,
  updateOne,
  deleteOne,
  getOne,
  getAll
} = require('./factoryController');
const catchAsync = require('./../utils/catchAsync');
// const AppError = require('./../utils/appError');
// Get Files

exports.aliasTopTours = async (req, res, next) => {
  req.query.limit = 5;
  req.query.sort = '-ratingsAverage,price';
  req.query.fields = 'name, price, ratingsAverage, summary, difficulty';
  next();
};

exports.getALLTours = getAll(Tour);

exports.createTour = createOne(Tour);

exports.getATour = getOne(Tour, { path: 'reviews' });

exports.updateTour = updateOne(Tour);

exports.deleteTour = deleteOne(Tour);

exports.getMonthlyAverage = catchAsync(async (req, res, next) => {
  //  2021;

  const year = req.params.year * 1;

  const tour = await Tour.aggregate([
    {
      $unwind: '$startDates'
    },
    {
      $match: {
        startDates: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`)
        }
      }
    },
    {
      $group: {
        _id: {
          $month: '$startDates'
        },
        numTourStarts: { $sum: 1 },
        tours: { $push: '$name' }
      }
    },
    {
      $addFields: { month: '$_id' }
    },
    {
      $project: {
        _id: 0
      }
    },
    {
      $sort: { numTourStarts: -1 }
    }
  ]);
  res.status(200).json({
    status: 'success',
    tour
  });
});

exports.getTourStats = catchAsync(async (req, res, next) => {
  const tour = await Tour.aggregate([
    {
      $match: {
        ratingsAverage: {
          $gte: 4.5
        }
      }
    },
    {
      $group: {
        _id: { $toUpper: '$difficulty' },
        numOfTours: { $sum: 1 },
        averageRating: { $avg: '$ratingsAverage' },
        numOfRating: { $sum: '$ratingsQuantity' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' },
        avgPrice: { $avg: '$price' }
      }
    },
    {
      $sort: { avgPrice: 1 }
    }
    // {
    //   $match: { _id: { $ne: 'EASY' } }
    // }
  ]);

  res.status(200).json({
    status: 'success',
    tour
  });
});
