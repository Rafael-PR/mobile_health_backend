const express = require('express');
const router = express.Router();

/* GET therapist listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a therapist resource');
});

module.exports = router;