// Write your JavaScript code here!
document = window.document;


const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets); })
       .then(function () {
       console.log(listedPlanets);
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
     
      let list = document.getElementById('faultyItems');
      let pilot = document.querySelector("input[name=pilotName]");
      let copilot = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoLevel = document.querySelector("input[name=cargoMass]");
 
    // formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue)
    //   let list = "";
        list = "",

        window.addEventListener("load", function() {
            let form = document.querySelector("form");
            form.addEventListener("submit", function (event) {
              formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
            //   alert("all field required");
              event.preventDefault();
            });
        
        // alert("all fields required");
        

