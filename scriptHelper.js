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
    console.log(testInput)
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(Number(testInput))) {
        return "Not a Number";
    } else {        
        return "Is a Number";
    }

 }

 
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
    
    //use validate input function to ensure proper data entry (forms filled out, pilot and copilot are strings, fuel and cargo are numbers)
   
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoMass) === "Empty") {
        alert("Please enter data for each subject.");
    } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        alert("Please ensure pilot and copilot are non-numerical entries.");
    } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMass) === "Not a Number") {
        alert("Please ensure Fuel Level and Cargo Mass are numerical entries.");
    }
    
     //update requirements

    document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
    list.style.visibility = "visible"; 

    if (Number(fuelLevel) < 10000 && Number(cargoMass) <= 10000) {
         document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
         document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
         document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
         document.getElementById("launchStatus").style.color = "red";
    } else if (Number(fuelLevel) >= 10000 && Number(cargoMass) > 10000) {
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "red";
    } else if (Number(fuelLevel) < 10000 && Number(cargoMass) > 10000) {
        document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "red";
    } else {
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
        document.getElementById("launchStatus").innerHTML = "Shuttle is Ready for Launch";
        document.getElementById("launchStatus").style.color = "green";
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