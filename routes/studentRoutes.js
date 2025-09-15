const express = require("express");

const studentController = require("../controller/studentController");
const verifytoken = require('../middleware/auth')
const router = express.Router();

router.post("/save", studentController.saveData);

router.post('/many',studentController.saveManyData);

router.get("/", studentController.getData);

router.get("/get/:rollNo", studentController.getDataByRoll);

router.put("/update/:rollNo", studentController.updateData);

router.delete("/delete/:rollNo", studentController.deleteData);

router.get('/filter',studentController.filterData)

router.get('/logindata',studentController.logindata);

router.get('/verifytoken',verifytoken,studentController.verify)

module.exports = router;
