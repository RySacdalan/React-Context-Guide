import React, { Component } from "react";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>Book names</h1>
        <ul>
          <li>The name of the Kings</li>
          <li>King Speech</li>
          <li>The Final Empire</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
