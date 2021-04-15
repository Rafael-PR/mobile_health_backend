const express = require('express')

const router = express.Router()
const clientController = require('../controllers/clientController')
const client = require('../database/client')
const authorizeClient = require('../middlewares/authorizeClient')



//****** CRUD Operations ******///

router.get('/bookings',authorizeClient,clientController.get_bookings)

router.get('/me', authorizeClient, clientController.me)

//updateone with findOneandUpdate
router.put('/', clientController.update_client )

router.delete('/:id', clientController.delete_client )

//get one //find by id
router.get('/:id', clientController.find_client)

//delete all which match a dynamic query
router.delete('/', clientController.delete_clients )

router.post('/',clientController.create_client )

//get all
router.get('/', clientController.list_clients)

module.exports = router;
