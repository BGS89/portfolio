import { Routes, Route, useLocation } from "react-router-dom";
import Projects from "./Projects";
import Contact from "./Contact";
import About from "./About";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes({ theme }) {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<About theme={theme} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
export default AnimatedRoutes;
