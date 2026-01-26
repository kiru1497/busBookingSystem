const User = require("./user");
const Bus = require("./bus");
const Booking = require("./booking");
const Payment = require("./payment");

// USER → BOOKINGS (1:M)
User.hasMany(Booking);
Booking.belongsTo(User);

// BUS → BOOKINGS (1:M)
Bus.hasMany(Booking);
Booking.belongsTo(Bus);

module.exports = {
  User,
  Bus,
  Booking,
  Payment,
};
