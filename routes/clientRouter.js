// const express = require('express');
// const router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');



//****** CRUD Operations ******///

router.post('/',clientController.create_client )

//get all
router.get('/', clientController.list_clients)

//get one //find by id
router.get('/:id', clientController.find_client)


//updateone with findOneandUpdate
router.put('/', clientController.update_client )

router.delete('/:id', clientController.delete_client )

//delete all which match a dynamic query
router.delete('/', clientController.delete_clients )

module.exports = router;
