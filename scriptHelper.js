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

   
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    window.addEventListener("load", function(){
        let form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
        
            //validate that user enter correct data type
        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");
        if (typeof(pilotName.value) !== string) {
            alert("Pilot Name invalid");
            event.preventDefault();
        }
        if (typeof(copilotName.value) !== string) {
            alert("Copilot Name invalid");
            event.preventDefault();
            }
        if (typeof(fuelLevel.value) !== number) {
            alert("Fuel Level invalid");
            event.preventDefault();
        }
        if (typeof(cargoMass.value) !== number) {
            alert("Cargo Mass invalid");
            event.preventDefault();
        }
        
        //update requirements

        document.getElementbyId("pilotStatus").innerHTML = `Pilot ${pilot} Ready`;
        document.getElementbyId("copilotStatus").innerHTML = `Co-pilot ${copilot} Ready`

        if (fuelLevel < 10000) {
            document.getElementbyId("faultyitems").style.visibility = "visible";
            document.getElementbyId("fuelStatus").innerHTML = "Not enough fuel for the journey. Please refuel.";
            document.getElementbyId("launchStatus").innerHTML = "Shuttle not ready for launch.";
            document.getElementbyId("launchStatus").style.color = "red";
        }

        if (cargoMass > 10000) {
            document.getElementbyId("faultyitems").style.visiblity = "visible";
            document.getElementbyId("faultyitems").innerHTML = "There is too much mass for shuttle takeoff.";
            document.getElementbyId("launchStatus").innerHTML = "Shuttle not ready for launch.";
            document.getElementbyId("launchStatus").style.color = "red";
        }

        // shuttle ready to launch

        else {
            document.getElementbyId("launchStatus").innerHTML = "Shuttle is ready for launch.";
            document.getElementbyId("launchStatus").style.color = "green";
        }
    
        });
        });
    }
 
 async function myFetch() {
     let planetsReturned;
     fetch("https://handlers.education.launchcode.org/static/planets.json")
     planetsReturned = await fetch().then( function(response) {
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