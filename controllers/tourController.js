const fs = require('fs');

// Get Files

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

exports.getALLTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedTime: req.requestedTime,
    result: tours.length,
    data: {
      tours,
    },
  });
};

exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/../dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tours: newTour,
        },
      });
    }
  );
};

exports.getATour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((elem) => elem.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

exports.updateTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((elem) => elem.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      message: '... Updated tour successfully',
      tour: Object.assign(tour, req.body),
    },
  });
};

exports.deleteTour = (req, res) => {
  res.status(204).json({
    status: 'success',
    data: null,
  });
};

exports.checkID = (req, res, next, val) => {
  console.log(`Tour id is:  ${val}`);

  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Not a Valid Id',
    });
  }
  next();
};

exports.checkBody = (req, res, next, val) => {
  console.log(`${val} This is body`);
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price',
    });
  }
  next();
};
