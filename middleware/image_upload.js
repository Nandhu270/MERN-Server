const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, './uploads')
    } ,
    filename: (req,file,cb)=>{
        const extension = path.extname(file.originalname);
        const newName = `${Date.now()}${extension}`;
        cb(null,newName);
    }
})

const upload = multer({storage})

module.exports = upload;