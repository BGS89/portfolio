import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { useState, useEffect } from "react";
import Intro from "./components/Intro";
import ParticleDisplay from "./components/Particles";

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
    }, 4900);
  }, []);

  {
    if (showApp === true) {
      return (
        <div>
          <div className={`App ${theme}`}>
            <Router>
              <div id="switchContainer">
                <i class="fa-solid fa-sun"></i>
                <label className="switch">
                  <input type="checkbox" onClick={toggleTheme} />
                  <span className="slider round"></span>
                </label>
                <i class="fa-regular fa-moon"></i>
              </div>
              <section id="heading">
                <Header />
              </section>
              <main>
                <ParticleDisplay theme={theme} />
                <AnimatedRoutes />
              </main>
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
