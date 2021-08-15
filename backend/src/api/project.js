const Project = require('../models/project');
const bcrypt = require('bcrypt');
const response = require('../models/response'); //Created pre-formatted uniform response

/* register controller */
module.exports = class projectController {
    static async apiGetProject(req, res, next) {
        let result = new response();
        // search if the project already exsisted (call findOne function)
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

    static async apiPostProject(req, res, next) {
        let result = new response();
        const { // get user info from request
            name,
            due,
            priority,
            info
        } = req.body;
        //Get userId with JWT
        let userId = 1;
        //Create new project

        try{
            const newProject = new project({
                userId,
                name,
                due,
                priority,
                info
            });
            await newProject.save().catch((errors) => {
                result.status = 400;
                result.errors.push(errors);
            }).then(() => { // Return the new user info if successful
                result.status = 201;
                result.response = newProject
            });
        } catch (e) {
            result.status = 400;
            result.errors.push(e);
        }
        // Push the data to DB asynchronously (call save() function and handle errors)
        res.status(result.status).json(result); //Return whatever result remains
    }
}