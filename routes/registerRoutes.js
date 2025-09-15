const express = require('express')
const registerController = require('../controller/registerController')
const router = express.Router();

router.post('/signup', registerController.signup);

router.post('/login', registerController.login);

module.exports = router;