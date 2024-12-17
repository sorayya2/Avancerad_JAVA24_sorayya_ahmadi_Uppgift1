// Convertible.js
const Vehicle = require('./Vehicle');

class Convertible extends Vehicle {
  constructor(model, registrationNumber, rentalPricePerDay, roofType) {
    super(model, registrationNumber, rentalPricePerDay);
    this.roofType = roofType;
  }
}

module.exports = Convertible;
