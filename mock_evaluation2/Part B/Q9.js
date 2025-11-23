// create three functions
function displayCar() {
  console.log("Car");
}
function displayTruck() {
  console.log("Truck");
}
function displayBike() {
  console.log("Bike");
}

// create a higher order function
function vehicleInfo(vehicleCategory, callbackfn) {
  callbackfn();
}

// Call the HOF as illustrated
vehicleInfo("Car", displayCar);
vehicleInfo("Truck", displayTruck);
vehicleInfo("Bike", displayBike);