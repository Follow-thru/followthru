const User = require('../../models/user');
const bcrypt = require('bcrypt');

/* register controller */
module.exports = class authController {
    static async apiPostTask(req, res, next) {
        const user = await User.findOne({ username: req.body.username });
        if (user !== null) {           
            res.status(400).json({
                error: 'Username taken',
            });
            return;
        }

        const {
            username,
            password
        } = req.body;
        const hash_password = await bcrypt.hash(password, 10)
        const newUser = new User({
            username,
            hash_password
        });
        let success = true
        await newUser.save().catch((errors) => {
            success = false;
            res.status(400).json({ errors });
        });
        if (success) {
            res.status(201).json({ newUser });
        } else {
            return;
        }
    }
}