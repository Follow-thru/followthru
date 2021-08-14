const Branch = require('../models/branch');
const bcrypt = require('bcrypt');
const response = require('../models/response'); //Created pre-formatted uniform response

/* register controller */
module.exports = class branchController {
    static async apiGetBranch(req, res, next) {
        let result = new response();
        // search if the user already exsisted (call findOne function)
        const branch = await Branch.findOne({ id: req.query.id })
        .catch((errors) => {
            result.status = 400;
            result.errors.push(errors);
        }).then(() => { // Return the new user info if successful
            result.connected = true;
        });
        if (result.connected){
            if (branch == null) {
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
}