const imageController = require('../controller/imageController');
const express = require('express')
const upload = require('../middleware/image_upload')

const router = express.Router();

router.post("/upload", upload.single("imageUrl"),imageController.uploadImage);

router.get("/getimages",imageController.getImage);  

module.exports = router;