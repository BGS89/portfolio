import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <h1>PROJECTS</h1>
    </motion.div>
  );
}

export default Projects;
