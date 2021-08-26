// Write your helper functions here!

require('isomorphic-fetch');


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

   const div = document.getElementById('missionTarget');
   div.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">
                `;
}

function validateInput(testInput) {
  let convertToNum = Number(testInput);

if (testInput === "") {
  return "Empty";
} else if (!isNaN(convertToNum)){
  return 'Is a Number'
}else {
  return "Not a Number";
}
}



function formSubmission(document, list, pilotValue, copilotValue, fuelLevelValue, cargoLevelValue) {
  let lowFuelLevel = fuelLevelValue <10000;
  let highCargoLevel = cargoLevelValue >10000; 
  let launchStatusDom= document.getElementById("launchStatus");

if 
  (validateInput(pilotValue) === 'Empty' || validateInput(copilotValue) === 'Empty' || 
  validateInput(fuelLevelValue) === 'Empty' || validateInput(cargoLevelValue) === 'Empty') {
    alert("Please fill out all of the fields before submitting!");

    } else if (isNaN(fuelLevelValue) || isNaN(cargoLevelValue)){
    alert("User must enter valid input");

      } else if (lowFuelLevel === true && highCargoLevel === false){
        // Fuel status bad
        document.getElementById("fuelStatus").style.visibility = 'visible';
        document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
        document.getElementById("fuelStatus").style.color = "red";
        document.querySelector("h2").style.color = "red";
                 // get the PILOT status good
                 document.getElementById("pilotStatus").style.visibility = 'visible';
                 document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotValue} is ready for launch`;
               // get the copilot status good
                 document.getElementById("copilotStatus").style.visibility = 'visible';
                 document.getElementById("copilotStatus").innerHTML = `CoPilot ${copilotValue} is ready for launch`;
              // Cargo Status Good
              document.getElementById("cargoStatus").style.visibility = 'visible';
              document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;
              alert("Fuel to low!");


      }  else if (lowFuelLevel === false && highCargoLevel === true){
        //cargo bad
        document.getElementById("cargoStatus").style.visibility = 'visible';
        document.getElementById("cargoStatus").innerHTML =  `Cargo mass too heavy for launch`;
        document.getElementById("cargoStatus").style.color = "red";
        document.querySelector("h2").style.color = "red";
                 // get the PILOT status good
                 document.getElementById("pilotStatus").style.visibility = 'visible';
                 document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotValue} is ready for launch`;
               // get the copilot status good
                 document.getElementById("copilotStatus").style.visibility = 'visible';
                 document.getElementById("copilotStatus").innerHTML = `CoPilot ${copilotValue} is ready for launch`;
              // Fuel status is good
                 document.getElementById("fuelStatus").style.visibility = 'visible';
                 document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
                 alert("Cargo level to high! ");

      }  else if (lowFuelLevel === true && highCargoLevel === true) {
        // Fuel status bad
        document.getElementById("fuelStatus").style.visibility = 'visible';
        document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
        document.getElementById("fuelStatus").style.color = "red";
        //cargo bad
        document.getElementById("cargoStatus").style.visibility = 'visible';
        document.getElementById("cargoStatus").innerHTML =  `Cargo mass too heavy for launch`;
        document.getElementById("cargoStatus").style.color = "red";
        document.querySelector("h2").style.color = "red";
                 // get the PILOT status good
                 document.getElementById("pilotStatus").style.visibility = 'visible';
                 document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotValue} is ready for launch`;
               // get the copilot status good
                 document.getElementById("copilotStatus").style.visibility = 'visible';
                 document.getElementById("copilotStatus").innerHTML = `CoPilot ${copilotValue} is ready for launch`;

      }else {
                 // get the PILOT status good
                 document.getElementById("pilotStatus").style.visibility = 'visible';
                 document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotValue} is ready for launch`;
               // get the copilot status good
                 document.getElementById("copilotStatus").style.visibility = 'visible';
                 document.getElementById("copilotStatus").innerHTML = `CoPilot ${copilotValue} is ready for launch`;
              // Fuel status is good
                 document.getElementById("fuelStatus").style.visibility = 'visible';
                 document.getElementById("fuelStatus").innerHTML = `Fuel level high enough for launch`;
              // Cargo Status Good
              document.getElementById("cargoStatus").style.visibility = 'visible';
              document.getElementById("cargoStatus").innerHTML = `Cargo mass low enough for launch`;

        }


  if (!lowFuelLevel && !highCargoLevel){
    //Launch Status Pass:
    launchStatusDom.innerHTML = "Shuttle is Ready for Launch";
    launchStatusDom.style.color = "green";
  }

//Closing bracket for Funtion
}
// ABOVE colsing function bracket don't delete

async function myFetch() {
    let planetsReturned;
planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json');

planetsReturned =await planetsReturned.json();

return planetsReturned;
  
}

function pickPlanet(planets) {
  // randomly pick a planet from the array
  // Math random for index
  let index =  Math.floor(Math.random()* planets.length)
  return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
