const express = require('express');
const router = express.Router();
const therapistController = require('../controllers/therapistController');


// ++++++++++++  CRUD  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// POST a Therapist
router.post('/',therapistController.create_therapist)

// Get ALL Therapists
router.get('/', therapistController.list_therapists)

// Find One Therapist BY ID
router.get('/:id',therapistController.find_therapist)

// UPDATE first_name of Therapist with findOneAndUpdate
router.put('/',therapistController.update_therapist)










module.exports = router;