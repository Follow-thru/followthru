const express = require("express"); //Uses express to create a server
const cors = require("cors"); //Uses cors library to avoid dealing with that BS
const response = require('./models/response'); //Created pre-formatted uniform response
const app = express();

/* Server routing */

// routes
const registerRoute = require("./route/register.route") //Register
const branchRoute = require("./route/branch.route") //Register
const taskRoute = require("./route/task.route"); //Used to get task data
const projectRoute = require("./route/project.route");

// utilities
app.use(cors()); 
app.use(express.json()); //Json module is used to parse json I guess

// api
app.use("/api/task", taskRoute); //If using this link, send to task object
app.use("/api/register", registerRoute); //Send api authentication
app.use("/api/branch", branchRoute); //Send to branch object
app.use("/api/project", projectRoute); //Send to branch object
app.use("*", (req, res) => {
    let result = new response(404, ["Not Found"]);
    res.status(result.status).json(result); //Return 404 result
});

module.exports = app; //Export server for use in index.js
