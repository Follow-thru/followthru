const User = require('../models/user');
const bcrypt = require('bcrypt');
const response = require('../models/response'); //Created pre-formatted uniform response

/* register controller */
module.exports = class registerController {
    static async apiPostRegister(req, res, next) {
        let result = new response();
        let user;
        // search if the user already exsisted (call findOne function)
        try {
            user = await User.findOne({ username: req.body.username })
            result.connected = true; 
        } catch (e) {
            result.status = 400;
            result.errors.push("Error Connecting", e)
        }
        if (user !== null) {
            result.status = 400;
            result.errors.push('Username taken');
        }
        else{
            const { // get user info from request
                username,
                password
            } = req.body;
            // hash the password and create new User (using bcrypt library)
            const hash_password = await bcrypt.hash(password, 10)
            const newUser = new User({
                username,
                hash_password
            });
            // Push the data to DB asynchronously (call save() function and handle errors)
            try{
                await newUser.save();
                result.status = 201;
                result.success = true;
                result.response = newUser;
            } catch (e){
                result.status = 400;
                result.errors.push("Error when pushing user to database", e);
            }
        }
        res.status(result.status).json(result); //Return whatever result remains
    }
}