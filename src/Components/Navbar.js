import React, { Component } from "react";
import { ThemeContext } from "../Context/ThemeContext";

class Navbar extends Component {
  //Use to transfer data from the context/provider.
  static contextType = ThemeContext;
  render() {
    console.log(this.context);
    const { isLightTheme, light, dark } = this.context;
    //ternary rendering
    const theme = isLightTheme ? light : dark;

    //put all jscode above this return() code block.
    return (
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>ContextAPI</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
