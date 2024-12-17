// SUV.js
const Vehicle = require('./Vehicle');

class SUV extends Vehicle {
  constructor(model, registrationNumber, rentalPricePerDay, offroadCapable) {
    super(model, registrationNumber, rentalPricePerDay);
    this.offroadCapable = offroadCapable;
  }
}

module.exports = SUV;
