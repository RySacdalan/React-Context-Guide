import React, { useContext } from "react";
import { BookContext } from "../Context/BookContext";
import { ThemeContext } from "../Context/ThemeContext";

const BookList = () => {
  //destructure all need data from specific context.
  const { books } = useContext(BookContext);
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  //ternary rendering
  const theme = isLightTheme ? light : dark;

  console.log(books);
  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <h1>Book names</h1>

      {books.map((pages) => {
        return (
          <li style={{ background: theme.ui }} key={pages.id}>
            {pages.title}
          </li>
        );
      })}
    </div>
  );
};

export default BookList;
