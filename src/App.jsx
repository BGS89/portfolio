import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  return (
    <div>
      <Router>
        <section id="heading">
          <Header />
          <Nav />
        </section>
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
