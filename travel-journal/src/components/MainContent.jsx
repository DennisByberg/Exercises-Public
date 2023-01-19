import "./MainContent.css";
import Card from "./Card";
import players from "../footballPlayers";

const MainContent = () => {
  const cards = players.map((player) => {
    return (
      <Card
        key={player.id}
        currentClub={player.currentClub}
        position={player.position}
        shirtNumber={player.shirtNumber}
        age={player.age}
        firstName={player.firstName}
        lastName={player.lastName}
        nationality={player.nationality}
        imageOfPlayer={player.imageOfPlayer}
      />
    );
  });

  return <main>{cards}</main>;
};

export default MainContent;
