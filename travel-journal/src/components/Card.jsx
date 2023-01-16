import Players from "../footballPlayers";
import "./Card.css";

const Card = () => {
  console.log(Players);
  return (
    <section className="card-container">
      <img className="player-imageOfPlayer" src={Players[2].imageOfPlayer} />
      <div className="player-info">
        <div className="card-nationality-container">
          <img
            className="location-badge"
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
          />
          <p className="player-nationality">{Players[2].nationality}</p>
        </div>
        <div className="card-player-name-container">
          <p className="player-firstName">{Players[2].firstName}</p>
          <p className="player-lastName">{Players[2].lastName}</p>
        </div>
        <p className="player-age">Age: {Players[2].age}</p>
        <p className="player-shirtNumber"># {Players[2].shirtNumber}</p>
        <p className="player-position">{Players[2].position}</p>
        <p className="player-currentClub">{Players[2].currentClub}</p>
      </div>
    </section>
  );
};

export default Card;
