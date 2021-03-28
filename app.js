const express = require('express');
const morgan = require('morgan');
const tourRouter = require('./routes/toursRouter');
const userRouter = require('./routes/userRouter');
const app = express();

// middleware
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

app.use(express.static(`${__dirname}/public`));
app.use(express.json());

app.use((req, res, next) => {
  req.requestedTime = new Date().toISOString();
  next();
});

app.use((req, res, next) => {
  //console.log(`This is something new right ${req.requestTime}`);
  next();
});

const homeHandler = (req, res) => {
  res.json({
    message: 'This is a natours app from server side',
    app: 'Natours',
  });
};

app.route('/').get(homeHandler);

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
