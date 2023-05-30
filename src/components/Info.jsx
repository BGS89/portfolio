import { motion } from "framer-motion";
import Deer from "./StarlingMurmuration";

function Info() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <h1>INFO</h1>
      <Deer />
    </motion.div>
  );
}

export default Info;
