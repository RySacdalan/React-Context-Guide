import React from "react";
import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";
import ToggleTheme from "./Components/ThemeToggle";
import AuthContextProvider from "./Context/AuthContext";
import ThemeContextProvider from "./Context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <ToggleTheme />
          <Navbar />
          <BookList />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
