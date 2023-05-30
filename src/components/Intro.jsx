import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Intro() {
  const line1 = "Ben Sivyer";
  const line2 = "Web || Software Developer";

  const sentance = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.04,
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

  const [showElement, setShowElement] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowElement(false);
    }, 10000);
  }, []);

  return (
    <div>
      <div>
        {showElement ? (
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
              fontFamily: "roboto",
              opacity: showElement ? 1 : 0,
            }}
          >
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
          </div>
        ) : (
          <div></div>
        )}{" "}
      </div>
    </div>
  );
}

export default Intro;
