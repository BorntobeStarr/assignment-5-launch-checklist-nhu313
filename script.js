// Write your JavaScript code here!
document = window.document; /* @FEEDBACK: Great idea, but it breaks the browser's implementation. Remove line */

/* @FEEDBACK: Remove `pickPlanet` and `addDestinationInfo` from this line.
This is only used for testing */
const { myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

/* @FEEDBACK: ALL code, except line 10, should be inside the callback function (i.e. replace ...)
`window.addEventListener("load", function() {...})`
Without this the form listener is not being added. */

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
       let listedPlanets = result;
       /* @FEEDBACK: Only need one `then`. Remove lines 19 - 21. */
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
    /* @FEEDBACK: like 58 is nneccessary and overwrites the DOM node stored in `list` on line 49. */
        list = "",

        /* @FEEDBACK: As stated above, all code needs to be within the load callback. */
        window.addEventListener("load", function() {
            let form = document.querySelector("form");
            form.addEventListener("submit", function (event) {
              /* @FEEDBACK: Your passing DOM Nodes to `formSubmission`, it would be cleaner if you extracted the value
              via `.value` then passed the resulting strings. */
              formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
            //   alert("all field required");
            /* @FEEDBACK: `event.preventDefault()` should be the first line inside the "submit" callback, before calling `formSubmission`. */
              event.preventDefault();
            });
        
        // alert("all fields required");
        
/* @FEEDBACK: `window.addEventListener` wasn't properly closed. I added the appropriate syntax. */
          });
