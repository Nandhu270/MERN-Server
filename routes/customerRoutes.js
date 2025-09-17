const express = require('express');
const customerController = require('../controller/customerController');
const router = express.Router();
const verifyToken = require("../middleware/customer_auth");

router.post('/savedata', customerController.register);

router.post('/login',customerController.login);

router.post('/savefood', verifyToken ,customerController.saveFood);

router.get('/getData', verifyToken, customerController.getData);

router.get('/filter',verifyToken, customerController.filterData)

module.exports = router
