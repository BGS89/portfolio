import { motion } from "framer-motion";

function Header() {
  const line1 = "Ben Sivyer";
  const line2 = "Web||Software Developer";

  const sentance = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <header>
      <motion.h1
        className="load-screen-message"
        variants={sentance}
        initial="hidden"
        animate="visible"
      >
        {line1.split("").map((char, index) => {
          return (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
        <br />
        {line2.split("").map((char, index) => {
          return (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
      </motion.h1>
    </header>
  );
}

export default Header;
