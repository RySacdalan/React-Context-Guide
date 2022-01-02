import React from "react";
import { ThemeContext } from "../Context/ThemeContext";

class ToggleTheme extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { ToggleTheme } = this.context;
    return <button onClick={ToggleTheme}>Change Theme</button>;
  }
}

export default ToggleTheme;
