const Task = require('../models/task');
const Branch = require('../models/branch');
const bcrypt = require('bcrypt');
const response = require('../models/response'); //Created pre-formatted uniform response

/* register controller */
module.exports = class taskController {
    static async apiGetTask(req, res, next) {
        let result = new response();
        // search if the user already exsisted (call findOne function)
        let task;
        if (req.query.id === undefined) {
            result.errors.push("Missing Id");
            result.status = 400;
        } else {
            try{
                task = await Task.findById(req.query.id);
                result.connected = true;
            } catch (e) {
                result.status = 400;
                result.errors.push("Error Connecting", e);
            }
            if (result.connected){
                if (task == null) {
                    result.status = 400;
                    result.errors.push('Task not found');
                } else{
                    result.status = 200;
                    result.success = true;
                    result.response = task;
                }
            }
        }
        res.status(result.status).json(result); //Return whatever result remains
    }
    static async apiPostTask(req, res, next) {
        let result = new response();
        const { // get user info from request
            parentId,
            name,
            due,
            priority,
            info
        } = req.body;

        let parentBranch; //Used to find parent id
        try{
            parentBranch = await Branch.findById(parentId);
            result.connected = true;
        } catch (e) { //On error
            result.status = 400;
            result.errors.push("Error Connecting", e);
        }
        if (parentBranch === null){ //If parents don't exist
            result.status = 400;
            result.errors.push("Parent does not exist");
        }
        else if (result.connected){ //If connected properly
            let newTask;
            try{
                newTask = new Task({//Create new task
                    parentId,
                    name,
                    due,
                    priority,
                    info
                });
            } catch (e) {
                result.status = 400;
                result.errors.push("Error creating task", e);
            }
            try {
                await newTask.save() //Send task to database
                result.status = 201;
                result.response = newTask;
                result.success = true;
                result.connected = true;
            } catch (e) {
                result.status = 400;
                result.errors.push("Error pushing to database", e);
            }
        }
        res.status(result.status).json(result); //Return whatever result remains
    }
}