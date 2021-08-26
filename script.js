// Write your JavaScript code here!

  let listedPlanets;
  let listedPlanetsResponse = myFetch();

  window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      let list = document.getElementById('faultyItems');
          list = list.value;
      let pilot = document.querySelector("input[name=pilotName]");
          pilot = pilot.value;
      let copilot = document.querySelector("input[name=copilotName]");
          copilot = copilot.value;
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
          fuelLevel = fuelLevel.value;
      let cargoLevel = document.querySelector("input[name=cargoMass]");
          cargoLevel = cargoLevel.value;

      formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    //   alert("all field required");
  });
  listedPlanetsResponse.then(function (result) {
    listedPlanets = result;

 let planet = pickPlanet(listedPlanets);
     addDestinationInfo(
         document,
         planet.name,
         planet.diameter,
         planet.star,
         planet.distance,
         planet.moons,
         planet.image
     );
     console.log(planet);
    });

 document.getElementById("faultyItems").style.visibility = 'hidden';

  
});

   