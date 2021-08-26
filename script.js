// Write your JavaScript code here!

const {myFetch} = require("./scriptHelper");

let list = document.getElementById('faultyItems');
let pilot = document.querySelector("input[name=pilotName]");
let copilot = document.querySelector("input[name=copilotName]");
let fuelLevel = document.querySelector("input[name=fuelLevel]");
let cargoLevel = document.querySelector("input[name=cargoMass]");

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();

  window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    //   alert("all field required");
  });
  listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   //  const planet = pickPlanet(listedPlanets)
   //  addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
 let planet = pickPlanet(listedPlanets);
     addDestinationInfo(
         document,
         planet.name,
         planet.diameter,
         planet.star,
         planet.distance,
         planet.moons,
         planet.imageUrl
     );
     console.log(planet);
    });

 document.getElementById("faultyItems").style.visibility = 'hidden';
// get the form
// add a listener to when the form submit
//  form.addEventListener('submit', function(event) {
   // if it's not, preventDefault
   // get the value for each of the input field
   // let pilotInput = this.document.querySelector("input[name=pilotName]");
   // const pilotValue = pilotInput.value

   // let list = document.getElementById('faultyItems');
  
});

   