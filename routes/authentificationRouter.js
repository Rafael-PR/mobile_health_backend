const express = require("express");
const router = express.Router();

const {
    login
} = require('../controllers/authentificationController');

router.post("/login",login);

//Wann immer jetzt eine POST request kommt auf /auth/login 
//wird an den authentificationController weitergeleitet

module.exports = router;