import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <h1>CONTACT</h1>
    </motion.div>
  );
}

export default Contact;
