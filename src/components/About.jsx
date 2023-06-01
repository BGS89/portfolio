import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a Junior Full Stack Software Developer with a passion for
          building efficient and user-friendly applications. With a solid
          foundation in software development principles and practices, I am
          committed to expanding my technical skillset and contributing to
          innovative projects that make a positive impact.
        </p>
      </section>
      <section id="skills">
        <h3>Technical Skills</h3>
        <ul id="tech">
          <li>
            <i class="fa-brands fa-react fa-2x"></i> React
          </li>
          <li>
            <i class="fa-brands fa-js fa-2x"></i> JavaScript
          </li>
          <li>
            <i class="fa-brands fa-html5 fa-2x"></i> HTML
          </li>
          <li>
            <i class="fa-brands fa-css3-alt fa-2x"></i> CSS
          </li>
          <li>
            <i class="fa-brands fa-react fa-2x"></i> PostreSQL
          </li>
          <li>
            <i class="fa-brands fa-node fa-2x"></i> Node.js
          </li>
          <li>
            <i class="fa-brands fa-git-alt fa-2x"></i> Git
          </li>
          <li>
            <i class="fa-brands fa-github fa-2x"></i> GitHub
          </li>
        </ul>
      </section>
    </motion.div>
  );
}

export default About;
