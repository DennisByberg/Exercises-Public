const CountryCard = ({ name, imageURL }) => {
  return (
    <li className="country-card">
      <p className="country-card__name">{name}</p>
      <img className="country-card__flag" src={imageURL} />
    </li>
  );
};

export default CountryCard;
