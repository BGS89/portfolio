import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <section id="heading">
        <Header />
        <Nav />
      </section>
      <About />
      <Footer />
    </div>
  );
}

export default App;
