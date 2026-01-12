const express = require('express'); 
const mySql = require('mysql2'); 

const app = express(); 

const connection = mySql.createConnection({
    host:'localhost',
    user:'root',
    password:'Edu@Games1973',
    database:'busBookingDB'
})

connection.connect((err)=>{
    if(err){
        console.log(err); 
        return; 
    }

    console.log("Connection has been created"); 

    const usersTable = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255),
      email VARCHAR(255)
    );
  `;

  const busesTable = `
    CREATE TABLE IF NOT EXISTS buses (
      id INT AUTO_INCREMENT PRIMARY KEY,
      busNumber VARCHAR(50),
      totalSeats INT,
      availableSeats INT
    );
  `;

  const bookingsTable = `
    CREATE TABLE IF NOT EXISTS bookings (
      id INT AUTO_INCREMENT PRIMARY KEY,
      seatNumber INT
    );
  `;


  const paymentsTable = `
    CREATE TABLE IF NOT EXISTS payments (
      id INT AUTO_INCREMENT PRIMARY KEY,
      amountPaid INT,
      paymentStatus VARCHAR(50)
    );
  `;

    connection.execute(usersTable);
    connection.execute(busesTable);
    connection.execute(bookingsTable);
    connection.execute(paymentsTable);
})

app.get('/',(req,res)=>{
    res.send("Hello World");
}); 

app.listen(3000,() => {
    console.log('Server is Running'); 
});