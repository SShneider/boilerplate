const router = require('express').Router();

router.use('/users', require('./route1')); // matches all requests to  /api/puppies/
router.use('/google', require('./google.js'))
router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
  });
module.exports = router;