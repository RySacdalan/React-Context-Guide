import React, { useState, createContext } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "The name of the kings", id: 1 },
    { title: "King's speech", id: 2 },
    { title: "No way home", id: 3 },
    { title: "Far from home", id: 4 },
    { title: "The final empire", id: 5 },
  ]);

  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
