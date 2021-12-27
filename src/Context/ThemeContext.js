import React, { createContext, Component } from "react";
import { Children } from "react/cjs/react.production.min";

//Create context function that stored inside the ThemeContext.
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  //This is the data, that  we will pass/provide through diff. components
  state = {
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
  };

  render() {
    return (
      //We use (.provider) to wrap all components(Child) that can use/pass the data.
      //Use (...) spread syntax to copy all the properties inside the state.
      <ThemeContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
