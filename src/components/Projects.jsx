import { motion } from "framer-motion";
import Card from "./Card";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <h2>PROJECTS</h2>
      <section id="projects">
        <Card />
        <Card />
      </section>
    </motion.div>
  );
}

export default Projects;
