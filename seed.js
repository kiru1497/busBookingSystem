const { sequelize } = require("./utils/db");
const User = require("./models/user");
const Bus = require("./models/bus");

const seedData = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate([
    { name: "Alice", email: "alice@gmail.com" },
    { name: "Bob", email: "bob@gmail.com" },
    { name: "Charlie", email: "charlie@gmail.com" }
  ]);

  await Bus.bulkCreate([
    { busNumber: "BUS101", totalSeats: 50, availableSeats: 20 },
    { busNumber: "BUS102", totalSeats: 40, availableSeats: 8 }
  ]);

  console.log("Sample data inserted");
  process.exit();
};

seedData();
