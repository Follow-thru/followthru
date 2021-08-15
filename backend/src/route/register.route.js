const express = require("express"); //Used for server
const router = express.Router(); //Allows for rerouting different requests 
const registerCtrl = require('../api/register'); //Used to send data to the register endpoint
/* All routes in authentication module */
router.route('/').post(registerCtrl.apiPostRegister);

module.exports = router; //Exports router for server