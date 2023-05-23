import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <h2>PROJECTS</h2>
      <section>
        <div className="card">
          <h3>NC News</h3>
          <p>
            Built as project during northcoders bootcamp. The intention here is
            to mimic the building of a real world backend service (such as
            reddit) which should provide this information to the front end
            architecture.
          </p>
        </div>
        <div className="card">
          <h3>Povmaze</h3>
          <p>
            POVMAZE is an exciting game about escaping a maze. It is a
            single-player game where the player must navigate through a
            challenging mazes to reach the end. The game is built using React,
            Phaser and Firebase.
          </p>
        </div>
      </section>
    </motion.div>
  );
}

export default Projects;
