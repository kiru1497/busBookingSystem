const User = require("../models/user");

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

module.exports = { addEntries, getEntries };
