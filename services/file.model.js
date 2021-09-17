const {DataTypes} = require('sequelize');


const model = (sequelize) => {
    const details = {
        id:{
             type:DataTypes.INTEGER,allowNull:false,primaryKey:true,autoIncrement:true
        },
        UserName:{
            type:DataTypes.STRING,allowNull:false,
        },
        FirstName:{
            type:DataTypes.STRING,allowNull:false,
        },
        LastName:{
            type:DataTypes.STRING,allowNull:false,
        },
    }
    return sequelize.define('details',details);
}

module.exports = model;