const express = require("express"); //Used for server
const router = express.Router(); //Allows for rerouting different requests 
const taskCtrl = require("../api/task"); //Takes user input and sends to DAO

router.route("/")
    .get(taskCtrl.apiGetTask) //Send request to GET task
    .post(taskCtrl.apiPostTask) //Send request to POST task

module.exports = router; //Exports class for routing information about tasks