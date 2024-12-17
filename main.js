// main.js
const Car = require('./Car');
const SUV = require('./SUV');
const Truck = require('./Truck');
const Convertible = require('./Convertible');
const RentalService = require('./RentalService');

function main() {
  const rentalService = new RentalService();

  // Skapa exempel på fordon
  const car = new Car("Toyota Corolla", "ABC123", 50, 5);
  const suv = new SUV("Jeep Wrangler", "DEF456", 100, true);
  const truck = new Truck("Volvo FH", "GHI789", 150, 5000);
  const convertible = new Convertible("Mazda MX-5", "JKL012", 80, "Soft top");

  console.log("Välkommen till Biluthyrningen!");

  // Visa tillgängliga fordon
  console.log("Tillgängliga fordon:");
  console.log(car.getDetails());
  console.log(suv.getDetails());
  console.log(truck.getDetails());
  console.log(convertible.getDetails());

  // Hyra och returnera fordon
  rentalService.rent(car, 3);
  rentalService.rent(suv, 5);

  rentalService.returnVehicle(car);

  console.log("Aktuella uthyrningar:", rentalService.rentedVehicles);
}

main();
