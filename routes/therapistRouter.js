const express = require('express');
const router = express.Router();
const therapistController = require('../controllers/therapistController');

const authorize = require('../middlewares/authorizeTherapist')

// ++++++++++++  CRUD  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



// router.get('/:id',authorize,therapistController.find_therapist)
router.get('/me', authorize, therapistController.me)

// UPDATE first_name of Therapist with findOneAndUpdate
router.put('/',therapistController.update_therapist)

//DELETE one Therapist
router.delete('/:id',therapistController.delete_therapist)

// Find One Therapist BY ID
router.get('/:id',therapistController.find_therapist)

//DELETE all Therapists
router.delete('/', therapistController.delete_all_therapists)

// POST a Therapist
router.post('/',therapistController.create_therapist)

// ++ Hier wird die authorization middleware hinzugefügt ++++++++++++++++++++
// Get ALL Therapists
router.get('/',therapistController.list_therapists)
//++ mit authorize 
//router.get('/', authorize,therapistController.list_therapists)






module.exports = router;