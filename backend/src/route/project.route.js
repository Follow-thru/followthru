const express = require("express"); //Used for server
const router = express.Router(); //Allows for rerouting different requests 
const projectCtrl = require('../api/project'); //Used to send data to the register endpoint
/* All routes in authentication module */
router.route('/')
    .get(projectCtrl.apiGetProject)
    .post(projectCtrl.apiPostProject)

module.exports = router; //Exports router for server