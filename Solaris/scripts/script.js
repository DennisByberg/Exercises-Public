const BASE_URL = "https://fathomless-shelf-54969.herokuapp.com";
const planets = document.querySelectorAll("main article");
let x = "";

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
    x = planet.id;
    getKey();
    getPlanets(x);
    toggleSlider();
  });
});

/* CLICK BACK BUTTON */
const backButton = document
  .querySelector("#bottom-info-container button")
  .addEventListener("click", () => {
    toggleSlider();
    console.log(sun);
    sun.style.backgroundColor = "#ffd029";
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
  const sun = document.querySelector("#sun");

  switch (x) {
    case "sun":
      x = 0;
      break;
    case "mercury":
      x = 1;
      sun.style.backgroundColor = "#8c8b85";
      break;
    case "venus":
      x = 2;
      sun.style.backgroundColor = "#e6cdcb";
      break;
    case "earth":
      x = 3;
      sun.style.backgroundColor = "#418ed4";
      break;
    case "mars":
      x = 4;
      sun.style.backgroundColor = "#ef5f5f";
      break;
    case "jupiter":
      x = 5;
      sun.style.backgroundColor = "#e29468";
      break;
    case "saturn":
      x = 6;
      sun.style.backgroundColor = "#c7aa72";
      break;
    case "uranus":
      x = 7;
      sun.style.backgroundColor = "#c9d4f1";
      break;
    case "neptune":
      x = 8;
      sun.style.backgroundColor = "#7a91a7";
      break;
  }

  data = await response.json();
  // name.
  document.querySelector("#slider h2").innerText = data.bodies[x].name;
  // latin-name.
  document.querySelector("#slider h3").innerText = data.bodies[x].latinName;
  // description.
  document.querySelector("#slider p").innerText = data.bodies[x].desc;
  // circumference
  document.querySelector("#circumference p").innerText =
    data.bodies[x].circumference;
  // distance from the sun
  document.querySelector("#km-from-sun p").innerText = data.bodies[x].distance;
  // max temp / day.
  document.querySelector("#max-temp p").innerText = data.bodies[x].temp.day;
  // min temp / night.
  document.querySelector("#min-temp p").innerText = data.bodies[x].temp.night;
  // moons
  document.querySelector("#moons p").innerText = data.bodies[x].moons;
}
