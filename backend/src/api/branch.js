const Project = require('../models/project');
const Branch = require('../models/branch');
const bcrypt = require('bcrypt');
const response = require('../models/response'); //Created pre-formatted uniform response

/* register controller */
module.exports = class branchController {
    static async apiGetBranch(req, res, next) {
        let result = new response();
        // search if the user already exsisted (call findOne function)
        let branch;
        if (req.query.id === undefined) {
            result.errors.push("Missing Id");
            result.status = 400;
        } else {
            try{
                branch = await Branch.findById(req.query.id);
                result.connected = true;
            } catch (e) {
                result.status = 400;
                result.errors.push("Error Connecting", e);
            }
            if (result.connected){
                if (branch === null) {
                    result.status = 400;
                    result.errors.push('Branch not found');
                } else{
                    result.status = 200;
                    result.success = true;
                    result.response = branch;
                }
            }
        }
        res.status(result.status).json(result); //Return whatever result remains
    }
    static async apiPostBranch(req, res, next) {
        let result = new response();
        const { // get user info from request body
            parentId,
            name,
            due,
            priority,
            info
        } = req.body;
        let parentProject, parentBranch; //Used to find parent id
        try{
            parentProject = await Project.findById(parentId); //Check to see if parent project exists
            parentBranch = await Branch.findById(parentId);
            result.connected = true;
        } catch (e) { //On error
            result.status = 400;
            result.errors.push("Error Connecting", e);
        }
        if (parentProject === null && parentBranch === null){ //If parents don't exist
            result.status = 400;
            result.errors.push("Parent does not exist");
        }
        else if (result.connected){ //If connected properly
            let newBranch;
            try{
                newBranch = new Branch({ //Create branch with input
                    parentId,
                    name,
                    due,
                    priority,
                    info
                });
            } catch (e) {
                result.status = 400;
                result.errors.push("Error creating branch", e)
            }
            try{
                await newBranch.save(); //Save the branch to mongodb
                result.status = 201;
                result.response = newBranch
                result.success = true;
            } catch (e) {
                result.status = 400;
                result.errors.push("Error pushing to database", e);
            }
        }
        
        // Push the data to DB asynchronously (call save() function and handle errors)
        res.status(result.status).json(result); //Return whatever result remains
    }
}