const Project = require('../models/project');
const bcrypt = require('bcrypt');
const response = require('../models/response'); //Created pre-formatted uniform response

/* register controller */
module.exports = class projectController {
    static async apiGetProject(req, res, next) {
        let result = new response();
        // search if the user already exsisted (call findOne function)
        const project = await Project.findOne({ id: req.query.id })
        .catch((errors) => {
            result.status = 400;
            result.errors.push(errors);
        }).then(() => { // Return the new user info if successful
            result.connected = true;
        });
        if (result.connected){
            if (project == null) {
                result.status = 400;
                result.errors.push('Project not found');
            }
            else{
                result.status = 200;
                result.response = project;
            }
        }
        res.status(result.status).json(result); //Return whatever result remains
    }
}