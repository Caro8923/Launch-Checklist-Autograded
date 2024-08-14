// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let div = document.getElementById("missionTarget");
    div.innerHTML = `
        <h2>Mission Destination</h2>
            <ol>
                <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons} </li>
                 </ol>
                 <img src="${imageUrl}">
                 `
 }
 
 function validateInput(testInput) {
    let returnString
    if (testInput === "") {
        returnString = "Empty";
    } else if (typeof(testInput) === number) {
        returnString = "Is a Number";
    } else if (isNaN(testInput)) {
        returnString = "Not a Number";
    }
    return returnString;
 }

   
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    
    //use validate input function to ensure proper data entry (forms filled out, pilot and copilot are strings, fuel and cargo are numbers)
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty") {
        alert("Please enter data for each subject.");
    }
    if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Please ensure pilot and copilot are non-numerical entries.")
    }
    if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
        alert("Please ensure Fuel Level and Cargo Mass are numerical entries.")
    }


        
     //update requirements

    document.getElementbyId("pilotStatus").innerHTML = `Pilot ${pilot} Ready`;
    document.getElementbyId("copilotStatus").innerHTML = `Co-pilot ${copilot} Ready`

    if (Number(fuelLevel) < 10000) {
         document.getElementbyId("faultyItems").style.visibility = "visible";
         document.getElementbyId("fuelStatus").innerHTML = "Not enough fuel for the journey. Please refuel.";
         document.getElementbyId("launchStatus").innerHTML = "Shuttle not ready for launch.";
         document.getElementbyId("launchStatus").style.color = "red";
        }

    if (Number(cargoMass) > 10000) {
        document.getElementbyId("faultyItems").style.visiblity = "visible";
        document.getElementbyId("cargoStatus").innerHTML = "There is too much mass for shuttle takeoff.";
        document.getElementbyId("launchStatus").innerHTML = "Shuttle not ready for launch.";
        document.getElementbyId("launchStatus").style.color = "red";
        }

        // shuttle ready to launch

    if (Number(fuelLevel) < 10000 && (Number(cargoMass) < 10000)) {
        document.getElementbyId("faultyItems").style.visibility = "hidden";
        document.getElementbyId("launchStatus").innerHTML = "Shuttle is ready for launch.";
        document.getElementbyId("launchStatus").style.color = "green";
        }
    
    }
 
 async function myFetch() {
     let planetsReturned;
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        const jsonPromise = response.json();
        return jsonPromise;
        });
 
     return planetsReturned;
 }
 
 function pickPlanet(array) {
    let myPlanet = array[Math.floor(Math.random() * array.length)];
    return myPlanet;
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;