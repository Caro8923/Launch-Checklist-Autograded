// Write your JavaScript code here!

const { addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault()
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    })

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = planetsReturned;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planet = pickPlanet(listedPlanetsResponse);
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let imageUrl = planet.image;
        let moons = planet.moons;
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    })

 });

 /* Questions : how/where do i access list?
                how do i validate testInput bc it is automatically a string?
                Why is my test input not working?
                floating else statement if shuttle ready to launch?