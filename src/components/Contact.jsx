import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <h2>CONTACT</h2>
      <section>
        <div className="contact">
          <p>
            <i class="fa-brands fa-github">
              {" "}
              <a href="https://github.com/BGS89">github.com/BGS89</a>
            </i>
          </p>
        </div>
        <div className="contact">
          <p>
            <i class="fa-solid fa-envelope"></i>
            <p>ben.sivyer@outlook.com</p>
          </p>
        </div>
        <div className="contact">
          <p>
            <i class="fa-brands fa-linkedin">
              {" "}
              <a href="https://www.linkedin.com/in/ben-sivyer/">
                linkedin.com/in/ben-sivyer/
              </a>
            </i>
          </p>
        </div>
      </section>
    </motion.div>
  );
}

export default Contact;
