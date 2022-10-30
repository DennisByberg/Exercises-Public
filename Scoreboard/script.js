const homePoints = document.querySelector("#home-points");
const awayPoints = document.querySelector("#away-points");

let homeTeamPoints = 0;
let awayTeamPoints = 0;

function addOnePointToHomeTeam() {
  homePoints.textContent = `${homeTeamPoints++}`;
}

function addOnePointToAwayTeam() {
  awayPoints.textContent = `${awayTeamPoints++}`;
}
