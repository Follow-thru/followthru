const Task = require('../models/task');
const bcrypt = require('bcrypt');
const response = require('../models/response'); //Created pre-formatted uniform response

/* register controller */
module.exports = class taskController {
    static async apiGetTask(req, res, next) {
        let result = new response();
        // search if the user already exsisted (call findOne function)
        const task = await Task.findOne({ id: req.query.id })
        .catch((errors) => {
            result.status = 400;
            result.errors.push(errors);
        }).then(() => { // Return the new user info if successful
            result.connected = true;
        });
        if (result.connected){
            if (task == null) {
                result.status = 400;
                result.errors.push('Task not found');
            }
            else{
                result.status = 200;
                result.response = task;
            }
        }
        res.status(result.status).json(result); //Return whatever result remains
    }
}