import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { useState, useEffect } from "react";
import Intro from "./components/Intro";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <Intro />
      <Router>
        <section id="heading">
          <Header />
          <i class="fa-solid fa-sun"></i>
          <label className="switch">
            <input type="checkbox" onClick={toggleTheme} />
            <span className="slider round"></span>
          </label>
          <i class="fa-regular fa-moon"></i>
          <Nav />
        </section>
        <AnimatedRoutes />
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
