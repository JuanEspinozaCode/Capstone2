"use strict";

window.onload = () => {
  addLocationsToDropdown();
  addNationalParksToDropdown();
};

function addLocationsToDropdown() {
  // Get the dropdown element by its ID
  // Use forEach to iterate over the array
  locationsArray.forEach(function (location) {
    
    // Create a new option element
    let option = document.createElement("option");

    // Set the value and text content for the new option
    option.value = location;
    option.textContent = location;


    // Add the new option to the dropdown
    states.appendChild(option);
  });
}

function addNationalParksToDropdown() {
  // Get the dropdown element by its ID
  // let parktype = document.getElementById("parktype");
  
  // Use forEach to iterate over the array
  parkTypesArray.forEach(function(park) {
    // Create a new option element
    let option = document.createElement("option");

    // Set the value and text content for the new option
    option.value = park;
    option.textContent = park;

    // Add the new option to the dropdown
    parktype.appendChild(option);
  });
}






