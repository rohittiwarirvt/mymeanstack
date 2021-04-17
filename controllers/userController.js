const catchAsync = require('./../utils/catchAsync');
const User = require('./../models/userModel');
const { updateOne, deleteOne, getOne, getAll } = require('./factoryController');
const AppError = require('../utils/appError');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
  });
  return newObj;
};

exports.getMe = (req, res, next) => {
  req.params.id = req.user.id;
  next();
};

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) create Error  if user POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'Updating Password not allowed!. Please use /updateMyPassword',
        401
      )
    );
  }
  // 2) Filter unwanted fields.
  const filteredBody = filterObj(req.body, 'name', 'email');
  // 3) update User Document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser
    }
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await User.findByIdAndUpdate(req.user._id, { active: false });
  res.status(204).json({
    status: 'success',
    data: null
  });
});

exports.createUser = catchAsync(async (req, res, next) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not yet defined!'
  });
});

exports.getUser = getOne(User);

exports.getAllUsers = getAll(User);

exports.updateUser = updateOne(User);

exports.deleteUser = deleteOne(User);
