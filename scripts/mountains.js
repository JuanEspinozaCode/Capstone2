'use strict'
//Initializing Mountain Dropdown
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
      option.value = mount.name;
      option.textContent = mount.name;
  
      // Add the new option to the dropdown
      mountain.appendChild(option);
    });
}

function findMountain() {
  const selectedValue = mountain.value;
  let selectedMountain = document.getElementById(selectedValue);

  if (selectedMountain) {
    selectedMountain.scrollIntoView({ behavior: 'smooth' });
  }
}

document.getElementById("mountains").innerHTML = `
  ${mountainsArray.map(mountainTemplate).join("")}
  <p class="footer justify-content-center"><h5>These ${
    mountainsArray.length
  } mountains were added recently. Check back soon for updates.</h5></p>
`;

function mountainTemplate(mountain) {
  let mySunrise = getSunsetForMountain(`${mountain.coords.lat},${mountain.coords.lng}`);

 async function getSunsetForMountain(lat, lng) {
    let response = await fetch(
      `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`
    );
    let data = await response.json();
    return data;
  }
  return `
  <div class="card my-2" style="width: 18rem;">
  <img src="images/${mountain.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <a id="${mountain.name}">
      <h2 class="card-title">${mountain.name}</h5>
      <p class="card-text">${mountain.desc}</p>
      <p class="card-text"><strong>Effort: ${mountain.effort}</strong></p>
      <p class="card-text"><strong>lat: ${mountain.coords.lat} lng: ${mountain.coords.lng}</strong></p>     
  </div>
  </div>

  `;
}

// function loadData() {
//   var down = document.getElementById("mountain");
//   for (let i = 0; i < mountainsArray.length; i++) {
//     var optn = mountainsArray[i];
//     var el = document.createElement("option");
//     el.textContent = optn;
//     el.value = optn;
//     down.appendChild(el);
//   }
//   down.innerHTML = "Elements Added";
// }

