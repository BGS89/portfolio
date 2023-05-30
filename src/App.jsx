import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { useState, useEffect } from "react";
import Intro from "./components/Intro";
import Deer from "./components/StarlingMurmuration";

function App() {
  const [theme, setTheme] = useState("light");
  const [showApp, setShowApp] = useState(false);

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

  useEffect(() => {
    setTimeout(() => {
      setShowApp(true);
    }, 10001);
  }, []);

  {
    if (showApp === true) {
      return (
        <div>
          <div className={`App ${theme}`}>
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
              <main>
                <Deer />
                <AnimatedRoutes />
              </main>
              {/* <Footer /> */}
            </Router>
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <Intro />
    </div>
  );
}

export default App;
