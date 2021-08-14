const express = require("express"); //Used for server
const taskCtrl = require("../api/task"); //Takes user input and sends to DAO
const router = express.Router(); //Allows for rerouting different requests 

router.route("/").get(taskCtrl.apiGetTask); //Send request to GET task on default

module.exports = router; //Exports class for routing information about restaurants