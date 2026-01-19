const {Sequelize} = require("sequelize"); //import sequelize and give only the sequelize 
//class from the sequelize library 

const sequelize = new Sequelize("busbookingdb", "root","Edu@Games1973", {
  host:"localhost", 
  dialect:"mysql", 
  logging:false
}) //connecting to the database using sequelize 


const connectDb = async()=>{ //connectDb function, async means this function will do something
  //that takes time 
  try {
  await sequelize.authenticate()    //tries to connect to the database, await means wait here
  //until the database responds 
  console.log("Sequelize connected to database"); //log this if the connection is successful 
  } catch (error) { //if anything goes wrong in try, execution jumps here 
    console.log("Db connection failed:", error) //prints error message and error details 
  }

}


module.exports = {sequelize, connectDb}; 


//This file's job was to 
//A - configue Sequelize 
//B - Connect to the MYSQL databse 
//C - Test the connection 
//D - Export everything for the rest of the app 