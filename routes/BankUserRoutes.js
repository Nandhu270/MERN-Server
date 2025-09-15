const express = require('express');

const bankuserController = require('../controller/BankUserController');

const router = express.Router();
    
router.post("/create",bankuserController.createUser);

router.get("/get",bankuserController.getUser);

module.exports = router

