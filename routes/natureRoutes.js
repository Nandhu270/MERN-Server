const express = require('express');
const natureController = require('../controller/natureController');
const verifyToken = require('../middleware/nature_auth');
const router = express.Router();

router.post('/savedata',natureController.saveData);

router.post('/login', natureController.login);

router.get('/data',verifyToken,natureController.getData);

module.exports = router;