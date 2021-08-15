const Branch = require('../models/branch');
const bcrypt = require('bcrypt');
const response = require('../models/response'); //Created pre-formatted uniform response

/* register controller */
module.exports = class branchController {
    static async apiGetBranch(req, res, next) {
        let result = new response();
        // search if the user already exsisted (call findOne function)
        let project;
        try{
            project = await Branch.findOne();
            result.connected = true;
        } catch (e) {
            result.status = 400;
            result.errors.push("Error Connecting", e);
        }
        if (result.connected){
            if (branch === null) {
                result.status = 400;
                result.errors.push('Branch not found');
            }
            else{
                result.status = 200;
                result.success = true;
                result.response = branch;
            }
        }
        res.status(result.status).json(result); //Return whatever result remains
    }
    static async apiPostBranch(req, res, next) {
        let result = new response();
        const { // get user info from request
            name,
            due,
            priority,
            info
        } = req.body;
        //Get userId with JWT
        let parentId = 1;
        //Create new project
        let newBranch;
        try{
            newBranch = new Branch({
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
            await newBranch.save()
            result.status = 201;
            result.response = newBranch
            result.success = true;
            result.connected = true;
        } catch (e) {
            result.status = 400;
            result.errors.push("Error pushing to database", e);
        }
        // Push the data to DB asynchronously (call save() function and handle errors)
        res.status(result.status).json(result); //Return whatever result remains
    }
}