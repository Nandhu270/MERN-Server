const express = require('express');
const customerController = require('../controller/customerController');
const router = express.Router();

router.post('/savedata', customerController.register);

router.post('/login',customerController.login);

module.exports = router
