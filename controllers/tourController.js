module.exports.getALLTours = (req, res) => {
  res.status(200).json({
    status: "success",
    result: tours.length,
    data: {
      tours,
    },
  });
};

module.exports.createTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          tours: newTour,
        },
      });
    }
  );
};

module.exports.getATour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((elem) => elem.id === id);

  if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "Not a Valid Id",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      tour,
    },
  });
};

module.exports.updateTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((elem) => elem.id === id);

  if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "Not a Valid Id",
    });
  }

  res.status(200).json({
    status: "success",
    data: {
      tour: "... Updated tour successfully",
    },
  });
};

module.exports.deleteTour = (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((elem) => elem.id === id);

  if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "Not a Valid Id",
    });
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
};
