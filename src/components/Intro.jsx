import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Intro() {
  const line1 = "Ben Sivyer";
  const line2 = "Web || Software Developer";

  const sentenceVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.04,
      },
    },
    exit: { opacity: 0 },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const [showElement, setShowElement] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeOut(true);
    }, 4000);
  }, []);

  useEffect(() => {
    if (fadeOut) {
      setTimeout(() => {
        setShowElement(false);
      }, 1000);
    }
  }, [fadeOut]);

  return (
    <div>
      {showElement && (
        <div
          style={{
            height: "100vh",
            width: "100wh",
            background: "white",
            color: "black",
            fontSize: "30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Source Code Pro",
          }}
        >
          <motion.h1
            className="load-screen-message"
            variants={sentenceVariants}
            initial="hidden"
            animate={fadeOut ? "exit" : "visible"}
            onAnimationComplete={() => setShowElement(!fadeOut)}
          >
            {line1.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
            <br />
            {line2.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letterVariants}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
        </div>
      )}
    </div>
  );
}

export default Intro;
