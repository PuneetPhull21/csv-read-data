const fileservice = require('./file.service.js');
const fs = require('fs');
const csv  =require('fast-csv');
module.exports = {
    upload,
}

async function upload(req,res,next){
     let tutorials = [];
     let path ="./public/images/" + req.file.filename;
      await fs.createReadStream(path)
      .pipe(csv.parse({ headers: true }))
      .on("error", (error) => {
        throw error.message;
      })
      .on("data", (row) => {
        tutorials.push(row);
      })
      .on("end", async() => {  
        await fileservice.uploadfiles(tutorials);
      });
  } 