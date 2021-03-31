const express = require('express');
const router = express.Router();

/* GET category listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a category resource');
});

module.exports = router;