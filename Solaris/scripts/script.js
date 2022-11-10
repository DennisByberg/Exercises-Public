const BASE_URL = "https://fathomless-shelf-54969.herokuapp.com";
const planets = document.querySelectorAll("main article");
getKey();
getPlanets();

/* HOVER PLANET */
planets.forEach((planet) => {
  planet.addEventListener("mouseover", (event) => {
    ChangeTextOnHover(event);
  });
});

/* LEAVE PLANET */
planets.forEach((planet) => {
  planet.addEventListener("mouseleave", (event) => {
    DeleteTextOnLeave(event);
  });
});

/* CLICK PLANET */
planets.forEach((planet) => {
  planet.addEventListener("click", () => {
    toggleSlider();
  });
});

/* CLICK BACK BUTTON */
const backButton = document
  .querySelector("#bottom-info-container button")
  .addEventListener("click", () => {
    toggleSlider();
  });

/* FUNCTIONS */
function ChangeTextOnHover(planets) {
  const planetName = planets.target.id;
  if (planetName != "sat-circle") {
    document.querySelector("#hover-text").textContent = planetName;
  }
}

function DeleteTextOnLeave(planets) {
  const planetName = planets.target.id;
  if (planetName != "sat-circle") {
    document.querySelector("#hover-text").textContent = "";
  }
}

// This function only toggle the slider to go back and fourth.
function toggleSlider() {
  slider.classList.toggle("show");
}

/* ASYNC FUNCTIONS */
async function getKey() {
  const response = await fetch(`${BASE_URL}/keys`, { method: "POST" });
  // If everything goes as planed...
  if (response.status === 200) {
    const data = await response.json();
    console.log(data);
  } else {
    // If not...?
    console.error("ERROR");
  }
}

async function getPlanets() {
  const response = await fetch(`${BASE_URL}/bodies/`, {
    headers: {
      "x-zocom": "solaris-vKkkQHqQboi7c6JF",
    },
  });
  const data = await response.json();
  console.log(data);
}