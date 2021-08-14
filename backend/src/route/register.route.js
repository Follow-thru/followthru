const express = require('express');
const router = express.Router();
const registerCtrl = require('../api/register'); //Used to send data to the register endpoint
/* All routes in authentication module */
router.route('/').post(registerCtrl.apiPostTask);

module.exports = router; //Exports router for server