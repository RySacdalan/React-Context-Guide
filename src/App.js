import React from "react";
import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";
import ToggleTheme from "./Components/ThemeToggle";
import AuthContextProvider from "./Context/AuthContext";
import BookContextProvider, { BookContext } from "./Context/BookContext";
import ThemeContextProvider from "./Context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <ToggleTheme />
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
