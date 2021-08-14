const express = require("express"); //Uses express to create a server
const cors = require("cors"); //Uses cors library to avoid dealing with that BS
const task = require("./api/task.js"); //Used to get task data
const app = express();

/* Server routing */

// routes
const authRoutes = require('./api/auth')

// utilities
app.use(cors()); 
app.use(express.json()); //Json module is used to parse json I guess

// api
app.use('/api', authRoutes);
app.use("/api/task", task); //If using that link, send to task object
app.use("*", (req, res) => res.status(404).json({error: "Not Found"}));

module.exports = app; //Export server for use in index.js
