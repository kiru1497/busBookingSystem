const {DataTypes} = require("sequelize"); //import only datatypes class from sequelize 

const {sequelize} = require("../utils/db"); //imports the sequelize connection created earlier


const User = sequelize.define("User", { //you are defining a model called User, model 
    //basically means a table 
    name:{ //a column called name that will store text 
        type:DataTypes.STRING, 
        allowNull:false
    }, 
    email:{
        type:DataTypes.STRING, 
        allowNull:false
    }

}) //creating the table and columns 

module.exports = User; 