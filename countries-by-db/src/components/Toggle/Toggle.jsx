// sass
import "./Toggle.scss";
// context
import { useContext } from "react";
import { ChangeDarkModeContext, DarkModeContext } from "../../App";

const Toggle = () => {
  const isDarkMode = useContext(DarkModeContext);
  const setDarkMode = useContext(ChangeDarkModeContext);

  return (
    <label className="switch">
      <input
        onClick={() => {
          setDarkMode(!isDarkMode);
        }}
        className="switch__input"
        type="checkbox"
      />
      <span className="switch__slider"></span>
    </label>
  );
};

export default Toggle;
