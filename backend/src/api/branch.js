const Branch = require('../models/branch');
const bcrypt = require('bcrypt');
const response = require('../models/response'); //Created pre-formatted uniform response


/* register controller */
module.exports = class branchController {
    static async apiGetBranch(req, res, next) {
        let result = new response();
        // search if the user already exsisted (call findOne function)
        console.log(req.query.id)
        const branch = await Branch.findOne({_id: req.query.id })
        .catch((errors) => {
            result.status = 400;
            result.errors.push(errors);
        }).then(() => { // Return the new user info if successful
            result.connected = true;
        });
        console.log(branch)
        if (result.connected){
            if (branch === undefined) {
                result.status = 400;
                result.errors.push('Branch not found');
            }
            else{
                result.status = 200;
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
        try{
            const newBranch = new branch({
                parentId,
                name,
                due,
                priority,
                info
            });
            await newBranch.save()
                .catch((errors) => {
                    result.status = 400;
                    result.errors.push(errors);
                }).then(() => { // Return the new user info if successful
                    result.status = 201;
                    result.response = newBranch
                });
        } catch (e) {
            result.status = 400;
            result.errors.push(e);
        }
        // Push the data to DB asynchronously (call save() function and handle errors)
    
        res.status(result.status).json(result); //Return whatever result remains
    }
}