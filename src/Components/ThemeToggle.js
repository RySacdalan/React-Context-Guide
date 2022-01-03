import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const ThemeToggle = () => {
  const { ToggleTheme } = useContext(ThemeContext);
  return <button onClick={ToggleTheme}>Change Theme</button>;
};

export default ThemeToggle;
