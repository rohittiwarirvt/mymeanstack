const express = require('express');

const {
        getBootcamp,
        getBootcamps,
        createBootcamp,
        updateBootcamp,
        deleteBootcamp
      } = require('../controller/bootcamp');

const router = express.Router();

router
  .route('/')
  .get(getBootcamps)
  .post(createBootcamp);

router
  .route('/:id')
  .get(getBootcamp)
  .post(createBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);




module.exports = router;
