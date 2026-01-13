const db = require('../utils/db');

const addEntries = (req, res) => {
  const { email, name } = req.body;

  const insertQuery = 'INSERT INTO users (email, name) VALUES (?, ?)';

  db.execute(insertQuery, [email, name], (err) => {
    if (err) return res.status(500).send(err.message);
    return res.status(200).send(`User with name ${name} successfully added`);
  });
};

const getEntries = (req, res) => {
  const selectQuery = "SELECT * FROM users";

  db.execute(selectQuery, (err, results) => {
    if (err) return res.status(500).send(err.message);
    return res.status(200).json(results);
  });
};

module.exports = { addEntries, getEntries };
