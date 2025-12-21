import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import PostList from "./components/PostList";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme} className="theme-btn">
        Switch Theme
      </button>
      <PostList />
    </div>
  );
}

export default App;
