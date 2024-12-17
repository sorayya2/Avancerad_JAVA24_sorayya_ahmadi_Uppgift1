// Car.js
const Vehicle = require('./Vehicle');

class Car extends Vehicle {
  constructor(model, registrationNumber, rentalPricePerDay, seats) {
    super(model, registrationNumber, rentalPricePerDay);
    this.seats = seats;
  }
}

module.exports = Car;
