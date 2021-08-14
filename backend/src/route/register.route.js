const express = require('express');
const registerCtrl = require('../api/register'); //Used to send data to the register endpoint
const router = express.Router();
/* All routes in authentication module */
router.route('/register').post(registerCtrl.apiPostTask);

module.exports = router; //Exports router for server