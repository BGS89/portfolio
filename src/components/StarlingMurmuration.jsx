import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useState, useEffect } from "react";

function Deer({ theme }) {
  const [particleColour, setParticleColour] = useState("#000000");
  const [backgroundColour, setBackgroundColour] = useState("#ffffff");

  useEffect(() => {
    if (theme === "light") {
      setParticleColour("#000000");
      setBackgroundColour("#ffffff");
    } else {
      setParticleColour("#ffffff");
      setBackgroundColour("#000000");
    }
  }, [theme]);

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: backgroundColour,
          },
        },
        fullScreen: {
          enable: false,
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 150,
              duration: 1,
            },
          },
        },
        particles: {
          color: {
            value: particleColour,
          },
          links: {
            color: particleColour,
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Deer;
