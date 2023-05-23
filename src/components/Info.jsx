import { motion } from "framer-motion";

function Info() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <h1>INFO</h1>
    </motion.div>
  );
}

export default Info;
