import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <h1>CONTACT</h1>
    </motion.div>
  );
}

export default Contact;
