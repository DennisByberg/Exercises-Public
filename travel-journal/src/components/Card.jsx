import "./Card.css";

const Card = ({
  currentClub,
  position,
  shirtNumber,
  age,
  lastName,
  firstName,
  nationality,
  imageOfPlayer,
}) => {
  return (
    <section className="card-container">
      <img className="player-imageOfPlayer" src={imageOfPlayer} />
      <div className="player-info">
        <div className="card-nationality-container">
          <img
            className="location-badge"
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
          />
          <p className="player-nationality">{nationality}</p>
        </div>
        <div className="card-player-name-container">
          <p className="player-firstName">{firstName}</p>
          <p className="player-lastName">{lastName}</p>
        </div>
        <p className="player-age">Age: {age}</p>
        <p className="player-shirtNumber"># {shirtNumber}</p>
        <p className="player-position">{position}</p>
        <p className="player-currentClub">{currentClub}</p>
      </div>
    </section>
  );
};

export default Card;
