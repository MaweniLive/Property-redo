let listings = JSON.parse(localStorage.getItem("listings"))
  ? JSON.parse(localStorage.getItem("listings"))
  : [
      {
        ID: "1",
        title: " Apartment Nice View",
        bedrooms: "3",
        price: "R11,000/mo",
        img: "./assets/pexels-pixabay-276724.jpg",
        locations: "Cape Town",
        location: "2985 Waterman Rd Camden, Cape Town(CT), 13316",
        type: "Apartment",
        bathroom: "1",
        parking: "1",
        size: "1789 Sq Ft",
      },
      {
        ID: "2",
        title: "Light and Modern Loft",
        bedrooms: "4",
        price: "R4,500/mo",
        img: "./assets/Loft.jpg",
        locations: "Durban",
        location: "2129 SW 75th Ave Bell, Durban(KZN), 32619",
        type: "Loft",
        bathroom: "2",
        parking: "1",
        size: "1200 Sq Ft",
      },
      {
        ID: "3",
        title: "Comfortable Loft",
        bedrooms: "1",
        price: "R3,700/mo",
        img: "./assets/Loft.jpg",
        locations: "East London",
        location: "299 Main St Brockport,  East London(EL), 14420",
        type: "Loft",
        bathroom: "2",
        parking: "1",
        size: "1900 Sq Ft",
      },
      {
        ID: "4",
        title: "Complex",
        bedrooms: "1",
        price: "R2,800/mo",
        img: "./assets/pexels-sevenstorm-juhaszimrus-439391.jpg",
        locations: "Pretoria",
        location: "299 Rose Ln Smithtown, Pretoria (GN), 11787",
        type: "Complex",
        bathroom: "1",
        parking: "1",
        size: "2360 Sq Ft",
      },
      {
        ID: "5",
        title: "Green View Design",
        bedrooms: "4",
        price: "R1,600/mo",
        img: "./assets/pexels-pixabay-276724.jpg",
        locations: "Cape Town",
        location: "299 Webster Ave New Rochelle, Cape Town(CT), 10801",
        type: "Apartment",
        bathroom: "2",
        parking: "1",
        size: "4300 Sq Ft",
      },
      {
        ID: "6",
        title: "Modern Loft Apartment",
        bedrooms: "5",
        price: "R5,600/mo",
        img: "./assets/pexels-pixabay-276724.jpg",
        locations: "Durban",
        location: "3 A Birchbrook Rd Ossining, Durban (KZN), 10562",
        type: "Apartment",
        bathroom: "3",
        parking: "1",
        size: "3450 Sq Ft",
      },
      {
        ID: "7",
        title: "Renovated Kitchen Loft",
        bedrooms: "1",
        price: "R3,500/mo",
        img: "./assets/Loft.jpg",
        locations: "Durban",
        location: "3 Alix Rd Newburgh, Durban(KZN), 12550",
        type: "Loft",
        bathroom: "1",
        parking: "1",
        size: "1760 Sq Ft",
      },
      {
        ID: "8",
        title: "Contemporary Apartment",
        bedrooms: "1",
        price: "R3,750/mo",
        img: "./assets/pexels-pixabay-276724.jpg",
        locations: "Cape Town",
        location: "3 Amfer Ct Bay Shore, Cape Town(CT), 11706",
        type: "Apartment",
        bathroom: "1",
        parking: "1",
        size: "1678 Sq Ft",
      },
      {
        ID: "9",
        title: "Ample Complex",
        bedrooms: "2",
        price: "R13,000/mo",
        img: "./assets/pexels-sevenstorm-juhaszimrus-439391.jpg",
        locations: "East London",
        location: "3 Atna Dr Amityville,  East London(EL), 11701",
        type: "Complex",
        bathroom: "2",
        parking: "1",
        size: "2300 Sq Ft",
      },
      {
        ID: "10",
        title: "Relaxing Apartment",
        bedrooms: "1",
        price: "R2,800/mo",
        img: "./assets/pexels-pixabay-276724.jpg",
        locations: "Cape Town",
        location: "1625 Southern Street,  Cape Town(CT), 11530",
        type: "Apartment",
        bathroom: "1",
        parking: "1",
        size: "2360 Sq Ft",
      },
      {
        ID: "11",
        title: " New Apartment",
        bedrooms: "3",
        price: "R5,200/mo",
        img: "./assets/pexels-pixabay-276724.jpg",
        locations: "East London",
        location: "1765 Long Street,  East London(EL), 32749",
        type: "Apartment",
        bathroom: "1",
        parking: "1",
        size: "2450 Sq Ft",
      },
      {
        ID: "12",
        title: " Comfortable Apartment",
        bedrooms: "4",
        price: "R1,600/mo",
        img: "./assets/pexels-pixabay-276724.jpg",
        locations: "East London",
        location: "2360 George Avenue,  East London(EL), 32056",
        type: "Apartment",
        bathroom: "2",
        parking: "1",
        size: "4300 Sq Ft",
      },
    ];
function readData(listings) {
  document.querySelector("#listings").innerHTML = "";
  listings.forEach((listings, i) => {
    document.querySelector("#listings").innerHTML += `
      <div class="col">
               <div class="bucket">
                   <img
                   id="admin-img"
                   class="proj_img"
                   src="${listings.img}"
                   />
                   <div class="overlay">
                  <div class="text-product">
                      <h4>${listings.title}</h4>
                <p>${listings.location}</p>
                <div class="icons">
                  <i class="fa-solid fa-bed">   ${listings.bedrooms}</i>
                  <i class="fa-solid fa-shower">  ${listings.bathroom}</i>
                  <i class="fa-solid fa-car">  ${listings.parking}</i>
                  <i class="fa-solid fa-ruler-combined">  ${listings.size}</i>
                  </div>
              </div>
            </div>
         </div>
        `;
  });
}
readData(listings);

function propertySort() {
  let type = document.querySelector("#propertySort").value;
  console.log(propertySort);
  if (type == "all") {
    readData(listings);
    return;
  }
  let filteredListings = listings.filter((listings) => {
    return listings.type == type;
  });
  readData(filteredListings);
}
function LocationSort() {
  let locations = document.querySelector("#LocationSort").value;
  console.log(LocationSort);
  if (locations == "all") {
    readData(listings);
    return;
  }
  let filteredListings = listings.filter((listings) => {
    return listings.locations == locations;
  });
  readData(filteredListings);
}
function bedroomsSort() {
  let bedrooms = document.querySelector("#bedroomsSort").value;
  console.log(bedroomsSort);
  if (bedrooms == "all") {
    readData(listings);
    return;
  }
  let filteredListings = listings.filter((listings) => {
    return listings.bedrooms == bedrooms;
  });
  readData(filteredListings);
}
function priceSort() {
  let price = document.querySelector("#priceSort").value;
  console.log(priceSort);
  if (price == "all") {
    readData(listings);
    return;
  }
  let filteredListings = listings.filter((listings) => {
    return listings.price == price;
  });
  readData(filteredListings);
}

