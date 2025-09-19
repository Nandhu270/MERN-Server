const multer = require('multer')
const path  = require('path')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./feedBackUpload')
    },
    filename:(req,file,cb)=>{
        const extension =  path.extname(file.originalname);
        const newname = `${Date.now()}${extension}`;
        cb(null,newname)
    }
})

const Upload = multer({storage})

module.exports = Upload