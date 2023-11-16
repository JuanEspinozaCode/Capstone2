'use strict'

window.onload = () => {
  addMountainsToDropdown();
  };

function addMountainsToDropdown() {
    // Get the dropdown element by its ID
    // Use forEach to iterate over the array
    mountainsArray.forEach(function (mount) {
      
      // Create a new option element
      let option = document.createElement("option");
  
      // Set the value and text content for the new option
      option.value = mount;
      option.textContent = mount.name;
  
      // Add the new option to the dropdown
      mountain.appendChild(option);
    });
}

function findMountain() {
    // Get the selected mountain value from the dropdown
    
  }
  
  function mountainTemplate(mountain) {
    let mySunrise = getSunsetForMountain(`${mountain.coords.lat},${mountain.coords.lng}`);
  
    return `
      <div class="mountain">
        <img class="mountain-photo" src="images/${mountain.img}">
        <h2 class="mountain-name">${mountain.name} <span class="species">(${mountain.elevation} feet)</span></h2>
        <h4 class="mountain-desc">${mountain.desc} </h4>
        <p><strong>Effort:</strong> ${mountain.effort}</p>
        <strong>Coordinates:</strong> lat: ${mountain.coords.lat} lng: ${mountain.coords.lng}
        <strong>Sunrise:</strong> ${mySunrise}
      </div>
    `;
  }