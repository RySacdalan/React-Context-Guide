import React, { Component } from "react";
import { ThemeContext } from "../Context/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
    //ternary rendering
    const theme = isLightTheme ? light : dark;

    return (
      <div
        className="book-list"
        style={{ background: theme.bg, color: theme.syntax }}
      >
        <h1>Book names</h1>
        <ul>
          <li style={{ background: theme.ui }}>The name of the Kings</li>
          <li style={{ background: theme.ui }}>King Speech</li>
          <li style={{ background: theme.ui }}>The Final Empire</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
