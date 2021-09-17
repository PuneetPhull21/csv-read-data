const multer = require('multer');

const filefilter = (req,file,cb)=>{
    console.log(file);
    if(file.mimetype.includes("csv")){
        return cb(null,true)
    }
    else{
        cb("Please select the csv file",false);
    }
}
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      console.log(file);
    cb(null,"./public/images");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-csv-${file.originalname}`);
  },
});

var uploadfile = multer({ storage: storage});
module.exports = uploadfile;