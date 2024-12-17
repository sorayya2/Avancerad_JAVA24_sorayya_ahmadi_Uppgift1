// RentalService.js
class RentalService {
    constructor() {
      this.rentedVehicles = [];
    }
  
    rent(vehicle, days) {
      const cost = this.calculateCost(vehicle, days);
      this.rentedVehicles.push({ vehicle, days, cost });
      console.log(`${vehicle.model} hyrdes ut för ${days} dagar. Kostnad: $${cost}`);
    }
  
    returnVehicle(vehicle) {
      const index = this.rentedVehicles.findIndex(r => r.vehicle === vehicle);
      if (index !== -1) {
        this.rentedVehicles.splice(index, 1);
        console.log(`${vehicle.model} har returnerats.`);
      } else {
        console.log("Fordonet finns inte i hyrlistan.");
      }
    }
  
    calculateCost(vehicle, days) {
      return vehicle.rentalPricePerDay * days;
    }
  }
  
  module.exports = RentalService;
  