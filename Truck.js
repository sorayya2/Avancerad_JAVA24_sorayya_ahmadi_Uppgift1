// Truck.js
const Vehicle = require('./Vehicle');

class Truck extends Vehicle {
  constructor(model, registrationNumber, rentalPricePerDay, loadCapacity) {
    super(model, registrationNumber, rentalPricePerDay);
    this.loadCapacity = loadCapacity;
  }
}

module.exports = Truck;
