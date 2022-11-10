const planets = document.querySelectorAll("main article");
const hoverText = document.querySelector("#hover-text");

planets.forEach((planet) => {
  planet.addEventListener("mouseover", (event) => {
    const planetName = event.target.id;
    if (planetName != "sat-circle") {
      hoverText.textContent = planetName;
    }
  });
});
