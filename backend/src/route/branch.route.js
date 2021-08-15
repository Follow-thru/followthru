const express = require("express"); //Used for server
const router = express.Router(); //Allows for rerouting different requests 
const branchCtrl = require('../api/branch'); //Used to send data to the register endpoint
/* All routes in authentication module */
router.route('/')
    .get(branchCtrl.apiGetBranch)
    .post(branchCtrl.apiPostBranch)

module.exports = router; //Exports router for server