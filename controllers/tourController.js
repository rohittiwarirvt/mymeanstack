const Tour = require('./../models/tourModel');
const APIFeatures = require('./../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
// Get Files

exports.aliasTopTours = async (req, res, next) => {
  req.query.limit = 5;
  req.query.sort = '-ratingsAverage,price';
  req.query.fields = 'name, price, ratingsAverage, summary, difficulty';
  next();
};

exports.getALLTours = catchAsync(async (req, res) => {
  const features = new APIFeatures(Tour.find(), req.query)
    .filter()
    .limitFields()
    .sort()
    .paginate();
  const tours = await features.query;
  res.status(200).json({
    status: 'success',
    requestedTime: req.requestedTime,
    result: tours.length,
    data: {
      tours
    }
  });
});

exports.createTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.create(req.body);
  if (!tour) {
    return next(new AppError('No Tour with that Id found', 404));
  }
  res.status(201).json({
    status: 'success',
    data: {
      tour
    }
  });
});

exports.getATour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findById(req.params.id);
  if (!tour) {
    return next(new AppError('No Tour with that Id found', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      tour
    }
  });
});

exports.updateTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
    runValidators: true,
    new: true
  });
  if (!tour) {
    return next(new AppError('No Tour with that Id found', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      message: '... Updated tour successfully',
      tour
    }
  });
});

exports.deleteTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findByIdAndDelete(req.params.id);
  if (!tour) {
    return next(new AppError('No Tour with that Id found', 404));
  }
  res.status(204).json({
    status: 'success',
    data: null
  });
});

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
