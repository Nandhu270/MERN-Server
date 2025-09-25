const express = require('express')
const feedbackController = require('../controller/feedBackController')
const router = express.Router()
const verifyToken = require('../middleware/feedbackauth')
const Upload = require('../middleware/feedbackimage')

router.post('/signin',feedbackController.signin)

router.post('/login',feedbackController.login)

router.post('/savefeedback',verifyToken,Upload.single("imageUrl"),feedbackController.saveFeedBack)

router.get('/getData',verifyToken,feedbackController.getData)

router.delete('/deletefeedback',verifyToken,feedbackController.deletefeedback)

router.get("/:id", verifyToken,feedbackController.getByid);

router.put('/updatefeedback',verifyToken,Upload.single("imageUrl"), feedbackController.updateFeedback);


module.exports = router
