const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

const Payment = sequelize.define("Payment", {
  amountPaid: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  paymentStatus: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Payment;
