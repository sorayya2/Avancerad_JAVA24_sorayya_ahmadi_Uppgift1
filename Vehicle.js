// Vehicle.js
class Vehicle {
    constructor(model, registrationNumber, rentalPricePerDay) {
      this.model = model; // Modellnamn för fordonet
      this.registrationNumber = registrationNumber; // Registreringsnummer
      this.rentalPricePerDay = rentalPricePerDay; // Pris per dag för uthyrning
    }
  
    getDetails() {
      return `Model: ${this.model}, RegNo: ${this.registrationNumber}, Price/Day: $${this.rentalPricePerDay}`;
    }
  }
  
  module.exports = Vehicle; // Exporterar klassen
  