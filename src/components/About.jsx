import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <section id="imaging"></section>
      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a Junior Full Stack Software Developer with a passion for
          building efficient and user-friendly applications. With a solid
          foundation in software development principles and practices, I am
          committed to expanding my technical skillset and contributing to
          innovative projects that make a positive impact.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid,
          beatae ad consectetur nesciunt iusto explicabo autem, molestiae
          dolorum voluptatibus illo expedita impedit reprehenderit mollitia
          voluptate. Culpa accusamus dolor vel? Tempore sunt perspiciatis aut
          maxime nobis eius quasi illo ea soluta, vero minus eum repudiandae
          alias distinctio error corporis magni pariatur sed nisi doloribus
          laudantium at laborum enim illum. Voluptate.
        </p>
      </section>
      <section id="skills">
        <h3>Technical Skills</h3>
        <ul id="tech">
          <li>
            <i class="fa-brands fa-react"></i> React
          </li>
          <li>
            <i class="fa-brands fa-js"></i> JavaScript
          </li>
          <li>
            <i class="fa-brands fa-html5"></i> HTML
          </li>
          <li>
            <i class="fa-brands fa-css3-alt"></i> CSS
          </li>
          <li>
            <i class="fa-brands fa-react"></i> PostreSQL
          </li>
          <li>
            <i class="fa-brands fa-node"></i> Node.js
          </li>
          <li>
            <i class="fa-brands fa-git-alt"></i> Git
          </li>
          <li>
            <i class="fa-brands fa-github"></i> GitHub
          </li>
        </ul>
      </section>
    </motion.div>
  );
}

export default About;
