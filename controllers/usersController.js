const User = require("../models/user");

const { Booking, Bus } = require("../models");

// POST /users
const addEntries = async (req, res) => {
  try {
    const { name, email } = req.body;
    await User.create({ name, email });
    res.status(201).send("User added successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// GET /users
const getEntries = async (req, res) => {
  try {
    const users = await User.findAll(); // Sequelize findAll
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.findAll({
      where: { userId: req.params.id },
      include: {
        model: Bus,
        attributes: ["busNumber"],
      },
    });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


module.exports = { addEntries, getEntries, getUserBookings };
