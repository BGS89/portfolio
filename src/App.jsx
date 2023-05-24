import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { useState, useEffect } from "react";

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
      <Router>
        <section id="heading">
          <Header />
          <button onClick={toggleTheme}>Toggle Theme</button>
          <Nav />
        </section>
        <AnimatedRoutes />
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
