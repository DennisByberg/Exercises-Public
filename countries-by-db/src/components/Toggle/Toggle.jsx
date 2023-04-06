// sass
import "./Toggle.scss";

const Toggle = () => {
  return (
    <label className="switch">
      <input className="switch__input" type="checkbox" />
      <span className="switch__slider"></span>
    </label>
  );
};

export default Toggle;
