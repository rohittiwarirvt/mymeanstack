const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');
const bodyParser = require('body-parser');
const viewRouter = require('./routes/viewRouter');
const tourRouter = require('./routes/toursRouter');
const userRouter = require('./routes/userRouter');
const reviewRouter = require('./routes/reviewRouter');
const bookingRouter = require('./routes/bookingRouter');
const globalErrorHandler = require('./controllers/errorController');
const { webhookCheckout } = require('./controllers/bookingController');
const AppError = require('./utils/appError');

const app = express();

app.enable('trust proxy');

// set pug engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Global middlewares

// Implement Cors
app.use(cors());
// Access-Control-Allow-Origin *
// api.natours.com, front-end natours.com
// app.use(cors({
//   origin: 'https://www.natours.com'
// }))

app.options('*', cors());
// app.options('/api/v1/tours/:id', cors());

// add gzip compression to
app.use(compression());

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

// Stripe webhook, BEFORE body-parser, because stripe needs the body as stream
app.post(
  '/webhook-checkout',
  express.raw({ type: 'application/json; charset=utf-8' }),
  webhookCheckout
);

// Body parser, reading data from body to req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

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
app.use(express.static(path.join(__dirname, 'public')));

// middleware for debbugging
app.use((req, res, next) => {
  req.requestedTime = new Date().toISOString();
  next();
});

// const homeHandler = (req, res) => {
//   res.json({
//     message: 'This is a natours app from server side',
//     app: 'Natours'
//   });
// };

app.use('/', viewRouter);

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/reviews', reviewRouter);
app.use('/api/v1/bookings', bookingRouter);

app.all('*', (req, res, next) => {
  const err = new AppError(
    `Can't find ${req.originalUrl} on this server!`,
    404
  );

  next(err);
});

app.use(globalErrorHandler);
module.exports = app;
