const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },
  email: {
    type: String,
    required: [true, 'Email field is required'],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email']
  },

  password: {
    type: String,
    minlength: 8,
    required: [true, 'Password field is required']
  },
  passwordConfirm: {
    type: String,
    minlength: 8,
    required: [true, 'PasswordConfirm Field is required'],
    validate: {
      validator: function(el) {
        return el === this.password;
      },
      message: 'Password field and confirm password field needs to be same'
    }
  },
  photo: String,
  role: {
    type: String,
    enum: ['user', 'guide', 'lead-guide', 'admin'],
    default: 'user'
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false
  }
});

userSchema.pre('save', async function(next) {
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.pre('save', function(next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  //console.log(this.passwordChangedAt, 'password');
  next();
});

userSchema.methods.correctPassword = async function(
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.createPasswordResetToken = function() {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  //  console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 60 * 1000;

  return resetToken;
};

userSchema.methods.changePasswordAfterTokenIssue = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    // console.log(JWTTimestamp, changedTimestamp);
    return JWTTimestamp < changedTimestamp + 5;
  }
  // False means Not Changed
  return false;
};

userSchema.pre('/^find/', function(next) {
  // this points to the current query

  this.find({ active: { $ne: false } });
  next();
});
const User = mongoose.model('User', userSchema);

module.exports = User;
