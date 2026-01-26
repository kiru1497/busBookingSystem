const express = require("express");
const app = express();

const {sequelize, connectDb} = require("./utils/db"); //imports sequelize and function that 
//tests database connection 

app.use(express.json());

app.use("/users", require("./routes/usersRoutes"));
app.use("/buses", require("./routes/busesRoutes"));
app.use("/bookings", require("./routes/bookingRoutes"));


require("./models");


const startServer = async()=>{ //a function to start everything properly
    await connectDb(); //call db connection checker to ensure database exists, credentials 
    //are correct and mysql server is running 
    await sequelize.sync(); //reads all models, creates tables 
    console.log("All models synced"); //confirms models were read and tables were created
}

app.listen(3000, () => console.log("Server running on port 3000"));

startServer(); //actually runs everything 