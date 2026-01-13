const db = require('../utils/db');

const addBus = (req, res) => {
  const { busNumber, totalSeats, availableSeats } = req.body;

  const insertQuery = `
    INSERT INTO buses (busNumber, totalSeats, availableSeats)
    VALUES (?, ?, ?)
  `;

  db.execute(insertQuery, [busNumber, totalSeats, availableSeats], (err) => {
    if (err) return res.status(500).send(err.message);
    return res.status(200).send("Bus added successfully");
  });
};

const getAvailableBuses = (req, res) => {
  const seats = req.params.seats;

  const selectQuery = "SELECT * FROM buses WHERE availableSeats > ?";

  db.execute(selectQuery, [seats], (err, results) => {
    if (err) return res.status(500).send(err.message);
    return res.status(200).json(results);
  });
};

module.exports = { addBus, getAvailableBuses };
