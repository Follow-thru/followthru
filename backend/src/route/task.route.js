const express = require("express"); //Used for server
const router = express.Router(); //Allows for rerouting different requests 
const taskCtrl = require("../oldFiles/task"); //Takes user input and sends to DAO

router.route("/").get(taskCtrl.apiGetTask); //Send request to GET task on default

module.exports = router; //Exports class for routing information about tasks