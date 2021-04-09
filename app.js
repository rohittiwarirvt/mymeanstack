const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

const tourRouter = require('./routes/toursRouter');
const userRouter = require('./routes/userRouter');
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');

const app = express();

// middleware

//1) Global middlewares
// Set Security headers
app.use(helmet());

// Development Logging
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// Limit Request from Same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many request from this IP, please try again in an hours!'
});

app.use('/api', limiter);

// Body parser, reading data from body to req.body
app.use(express.json({ limit: '10kb' }));

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization agains XSS
app.use(xss());

// Pararameter pollutioning
app.use(
  hpp({
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price'
    ]
  })
);

// Host Static files
app.use(express.static(`${__dirname}/public`));

// middleware for debbugging
app.use((req, res, next) => {
  req.requestedTime = new Date().toISOString();
  next();
});

const homeHandler = (req, res) => {
  res.json({
    message: 'This is a natours app from server side',
    app: 'Natours'
  });
};

app.route('/').get(homeHandler);

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

app.all('*', (req, res, next) => {
  const err = new AppError(
    `Can't find ${req.originalUrl} on this server!`,
    404
  );

  next(err);
});

app.use(globalErrorHandler);
module.exports = app;
