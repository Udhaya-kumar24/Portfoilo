import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const StarCanvas = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per StarCanvaslication lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "", // Background color (black)
        },
      },
      fullScreen: {
        enable: false, // Disable full screen
        zIndex: -1, // Ensure it doesn't cover other content
      },
      fpsLimit: 30, // Lower frame rate for smoother animation
      particles: {
        color: {
          value: "#ffffff", // Snowflake color (white)
        },
        links: {
          color: "#ffffff", // Line color (white)
          enable: false, // Disable linking snowflakes
        },
        move: {
          direction: "top-left", // Snowflakes initially move downwards
          enable: true, // Enable movement
          outModes: {
            bottom: "out", // Snowflakes disappear when reaching the bottom
          },
          random: false, // Randomize movement
          speed: {
            min: 1, // Minimum falling speed
            max: 5, // Maximum falling speed
          },
        },
        number: {
          density: {
            enable: true,
            value_area: 800, // Adjust density to control snowfall intensity
          },
          value: 150, // Number of snowflakes
        },
        opacity: {
          value: 0.8, // Snowflake opacity
        },
        shape: {
          type: "star", // Snowflake shape
        },
        size: {
          value: {
            min: .5, // Minimum snowflake size
            max: 3, // Maximum snowflake size
          },
          random: true, // Randomize size
        },
      },
      interactivity: {
        detectsOn: "canvas",
        events: {
          onHover: {
            enable: true,
            mode: "trail", // Change direction on hover
          },
        },
        modes: {
          trail: {
            enable: true,
            rotate: {
              value: 90, // Rotate snowflakes when hovering
              sync: true,
            },
          },
        },
      },
      detectRetina: true, // Detect retina for better quality on high-resolution screens
    }),
    []
  );
  
  

  if (init) {
    return (
      <Particles
        id="tsparticles_snow"
        particlesLoaded={particlesLoaded}
        options={options}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
    );
  }

  return <></>;
};

export default StarCanvas