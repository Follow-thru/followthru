const express = require('express');
const authCtrl = require('./auth/register');
const router = express.Router();

/* All routes in authentication module */
router.route('/register').post(authCtrl.apiPostTask);

module.exports = router;