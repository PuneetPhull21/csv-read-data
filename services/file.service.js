const db = require("../helpers/db");

module.exports = {
    uploadfiles,
}




async function uploadfiles(body){
   for(var i =0 ;i<body.length;i++){
       const details = {
           UserName:body[i].UserName,
           FirstName:body[i].FirstName,
           LastName:body[i].LastName,
       }
       console.log(details);
     await db.filemodel.create(details).then((data)=>{
    return data;

    })
    .catch((error)=>{
        return error;
    })
   }
   
} 