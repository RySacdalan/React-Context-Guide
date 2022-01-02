import React from "react";
import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";
import ToggleTheme from "./Components/ThemeToggle";
import ThemeContextProvider from "./Context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ToggleTheme />
        <Navbar />
        <BookList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
