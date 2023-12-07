function searchLocation() {
  // Filter by the state
  const selectedState = states.value;
  const filteredStates = nationalParksArray.filter(stateobj => stateobj.State === selectedState);
  
  let park=""
  let message = `<div class="d-flex justify-content-center"><h1 class="visitText">${filteredStates.length} National Parks to visit</h1></div>`;
  let message2 = `<div class="d-flex justify-content-center"><h1 class="visitText">${filteredStates.length} National Park to visit</h1></div>`;

  if (filteredStates.length > 1){
    document.getElementById("myTitle").innerHTML=message
  } else{
    document.getElementById("myTitle").innerHTML=message2
  }

  park += filteredStates.map(parkTemplate).join("");
  document.getElementById("myParks").innerHTML = park;
}

//Event listener for selected state option
document.getElementById("states").addEventListener("change", searchLocation);

// function findPark() {
//   // Filter by Park
//   const selectedPark = parktype.value;
//   const filteredParks = nationalParksArray.filter(parkobj => parkobj.LocationName.includes(selectedPark));

//   let message = `<h1>${filteredParks.length} National Parks to visit</h1><br><br>`;

//   message += filteredParks.map(parkTemplate).join("");

//   document.getElementById("myParks").innerHTML = message;
// }

// //Event listener for selected park type
// document.getElementById("parktype").addEventListener("change",findPark)

function searchStateAndPark() {
  // Filter by state
  const selectedState = states.value;
  const filteredByState = nationalParksArray.filter(stateObj => stateObj.State === selectedState);

  // Filter by park type within the selected state
  const selectedPark = parktype.value;
  const filteredParks = filteredByState.filter(parkObj => parkObj.LocationName.includes(selectedPark));

  let park=""
  let message = `<div class="d-flex justify-content-center"><h1 class="visitText">${filteredParks.length} National Parks to visit</h1></div>`;
  let message2 = `<div class="d-flex justify-content-center"><h1 class="visitText">${filteredParks.length} National Park to visit</h1></div>`;

  if (filteredParks.length > 1){
    document.getElementById("myTitle").innerHTML=message
  } else if (filteredParks.length === 0){
    document.getElementById("myTitle").innerHTML=message
  } else{
    document.getElementById("myTitle").innerHTML=message2
  }

  park += filteredParks.map(parkTemplate).join("");
  document.getElementById("myParks").innerHTML = park;

}

// Event listener for both state and park type selection
// document.getElementById("states").addEventListener("change", searchLocation);
// document.getElementById("parktype").addEventListener("input", searchLocation);


//! Type search by state
// function inputLocation(){
//   const selectedLocation =  document.getElementById("inputLocation").value;

//   const filteredLocation = nationalParksArray.filter(locationobj => locationobj.State.toLowerCase() === selectedLocation.toLowerCase());
  
//   let message = `<h1>${filteredLocation.length} National Parks to visit</h1><br><br>`;

//   message += filteredLocation.map(parkTemplate).join("");
//   document.getElementById("myParks").innerHTML = message;
// }

function showAllParks() {
  let park=""
  let message = `<div class="d-flex justify-content-center"><h1 class="visitText">${nationalParksArray.length} National Parks to visit</h1></div>`;
  document.getElementById("myTitle").innerHTML=message
  park += nationalParksArray.map(parkTemplate).join("");
  document.getElementById("myParks").innerHTML = park;
}


function parkTemplate(park) {
  return `
<div class="card my-2" style="width: 18rem;">
  <img src="https://i.pinimg.com/736x/7d/87/c6/7d87c6565b20d63f1572de74e62bf33c.jpg" class="card-img-top" alt="...">
  <div class="card-body">
      <h5 class="card-title">${park.LocationName}</h5>
      <p class="card-text">${park.City}, ${park.State}</p>
      <p class="card-text">${park.Address}</p>
      <a href="${park.Visit}" class="btn btn-primary">Visit Park</a>
  </div>
  </div>

        `;
        
}

/* <div class="card" style="width: 18rem;">
  <img src="${park.Image}" class="card-img-top" alt="...">
  <div class="card-body">
      <h5 class="card-title">${park.LocationName}</h5>
      <p class="card-text">${park.City}, ${park.State}</p>
      <a href="${park.Visit}" class="btn btn-primary">Visit Park</a>
  </div>
  </div> */