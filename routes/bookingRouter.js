const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');



//****** CRUD Operations ******///

router.post('/',bookingController.create_booking )

//get all
router.get('/', bookingController.list_bookings)

//get one //find by id
router.get('/:id', bookingController.find_booking)


//updateone with findOneandUpdate
router.put('/', bookingController.update_booking )

router.delete('/:id', bookingController.delete_booking )

//delete all which match a dynamic query
router.delete('/', bookingController.delete_bookings )

module.exports = router;
