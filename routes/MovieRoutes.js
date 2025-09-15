import { saveData,getData, getDataByName,updateData, deleteData,saveManyData } from "../controller/movieController.js";

import express from 'express';

const router = express.Router();

router.post("/save", saveData);

router.post('/many',saveManyData);

router.get("/", getData);

router.get("/get/:name", getDataByName);

router.put("/update/:name", updateData);

router.delete("/delete/:name", deleteData);


export default router;