const mongoose = require('mongoose');
const slugify = require('slugify');

const tourSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      maxlength: [40, 'A tour must have less then or equal to 40 characters'],
      minlength: [10, 'A tour must have more then or equal to 10 characters'],
      required: [true, 'A tour must have a Name']
    },
    slug: { type: String },
    maxGroupSize: {
      type: Number,
      required: [true, 'A Tour must have a maximum group size']
    },
    price: { type: Number, required: [true, 'Price is required for the tour'] },
    priceDiscout: {
      type: Number,
      validate: {
        validator: function(val) {
          return val < this.price;
        },
        message: 'Discount price ({VALUE}) should be belwo regular price'
      }
    },
    rating: Number,
    duration: {
      type: Number,
      required: [true, 'Duration is required for the tour']
    },
    difficulty: {
      type: String,
      enum: {
        values: ['easy', 'difficult', 'medium'],
        message: 'Difficulty is either easy , difficult or medium'
      },
      required: [true, 'Difficulty is required for the tour']
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, 'Minimum rating for tour can be 1'],
      max: [5, 'Maximum rating for tour can be 5']
    },
    ratingsQuantity: { type: Number, default: 0 },
    summary: {
      type: String,
      trim: true,
      required: [true, 'A tour must have a summary']
    },
    description: { type: String, trim: true },
    imageCover: {
      type: String,
      required: [true, 'A Tour must have a coverimage']
    },
    images: [String],
    startDates: [Date],
    createdAt: { type: Date, default: Date.now(), select: false },
    secretTour: { type: Boolean, default: false }
  },
  {
    toJSON: { virtuals: true },
    toObjectL: { virtuals: true }
  }
);

tourSchema.virtual('durationWeeks').get(function() {
  return this.duration / 7;
});

tourSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'tour',
  localField: '_id'
});

// Document middleware runs before pre .save() and  .create()

tourSchema.pre('save', function(next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

tourSchema.pre(/^find/, function(next) {
  this.find({ secretTour: { $ne: true } });
  this.start = Date.now();
  next();
});

tourSchema.post(/^find/, function(docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds`);
  next();
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
