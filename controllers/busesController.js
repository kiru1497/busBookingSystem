const Bus = require("../models/bus");
const { Op } = require("sequelize");

// POST /buses
const addBus = async (req, res) => {
  try {
    const { busNumber, totalSeats, availableSeats } = req.body;
    await Bus.create({ busNumber, totalSeats, availableSeats });
    res.status(201).send("Bus added successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// GET /buses/available/:seats
const getAvailableBuses = async (req, res) => {
  try {
    const seats = parseInt(req.params.seats);

    const buses = await Bus.findAll({
      where: {
        availableSeats: {
          [Op.gt]: seats // greater than
        }
      }
    });

    res.status(200).json(buses);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { addBus, getAvailableBuses };
