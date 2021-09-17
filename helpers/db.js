const Sequelize = require('sequelize');
const config = require('../config.json');


module.exports = db={};

setup();
async function setup(){
    let dbs = {
  host: "localhost",
  user: "root",
  password: "",
  database: "details",
  dialect: "mysql",
};
const sequelize = new Sequelize(dbs.database,dbs.user,dbs.password,{
    host:dbs.host,
    dialect:dbs.dialect,
}) 
  
   db.filemodel = require('../services/file.model')(sequelize);
    await sequelize.sync();
}

