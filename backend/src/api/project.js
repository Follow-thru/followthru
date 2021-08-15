const Project = require('../models/project');
const bcrypt = require('bcrypt');
const response = require('../models/response'); //Created pre-formatted uniform response

/* register controller */
module.exports = class projectController {
    static async apiGetProject(req, res, next) {
        let result = new response();
        // search if the project already exsisted (call findOne function)
        let project;
        try{
            project = await Project.findOne();
            result.connected = true;
        } catch (e) {
            result.status = 400;
            result.errors.push("Error Connecting", e);
        }
        if (result.connected){
            if (project == null) {
                result.status = 400;
                result.errors.push('Project not found');
            }
            else{
                result.status = 200;
                result.success = true;
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
        let newProject;
        try{
            newProject = new Project({
                userId,
                name,
                due,
                priority,
                info
            });
        } catch(e) {
            result.status = 400;
            result.errors.push("Error creating project", e)
        }
        try {
            await newProject.save()
            result.status = 201;
            result.success = true;
            result.connected = true;
            result.response = newProject;
        } catch (e) {
            result.status = 400;
            result.errors.push("Error pushing to database", e);
        }
        // Push the data to DB asynchronously (call save() function and handle errors)
        res.status(result.status).json(result); //Return whatever result remains
    }
}