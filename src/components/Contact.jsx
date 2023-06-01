import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <section>
        <h2>Contact</h2>
        <div className="contact">
          <p>
            <i class="fa-brands fa-github fa-2x"> </i>
            <br></br>
            <a href="https://github.com/BGS89">
              <p>github.com/BGS89</p>
            </a>
          </p>
        </div>
        <div className="contact">
          <p>
            <i class="fa-solid fa-envelope fa-2x"></i>
            <p>ben.sivyer@outlook.com</p>
          </p>
        </div>
        <div className="contact">
          <p>
            <i class="fa-brands fa-linkedin fa-2x"></i> <br></br>
            <a href="https://www.linkedin.com/in/ben-sivyer/">
              <p> linkedin.com/in/ben-sivyer/</p>
            </a>
          </p>
        </div>
      </section>
    </motion.div>
  );
}

export default Contact;
