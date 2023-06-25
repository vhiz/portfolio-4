import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme";
import './darkmode.scss';

export default function Darkmode() {
    const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className="dark" onClick={toggle}>
      <div className="icon">🌞</div>
      <div className="icon">🌙</div>
      <div
        className="ball"
        style={mode === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
}
