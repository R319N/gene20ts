import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";

interface ParticlesComponentProps {
  id?: string;
}

const ParticlesComponent: React.FC<ParticlesComponentProps> = ({ id }) => {
  const [init, setInit] = useState(false);

  // Initialize tsParticles engine
  const particlesInit = async (engine: any): Promise<void> => {
    await loadSlim(engine); // Load the slim package
    setInit(true);
  };

  // Callback when particles are loaded
  const particlesLoaded = (container?: any): void => {
    console.log("Particles loaded:", container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: false,
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 100,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#FFFFFF",
        },
        links: {
          enable: false,
        },
        move: {
          enable: true,
          direction: "none" as const,
          outModes: {
            default: "out" as const,
          },
          random: true,
          speed: 0.5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800, // Limit particle density to a specific area
          },
          value: 500,
        },
        opacity: {
          value: 0.7,
          random: true,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
        zIndex: {
          value: 0,
        },
      },
      detectRetina: true,
    }),
    []
  );

  useEffect(() => {
    initParticlesEngine(particlesInit);
  }, []);

  return (
    <div
      style={{
        height: "100px",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Particles
        id={id}
        options={options}
        style={{
          position: "relative",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden"
        }}
      />
    </div>
  );
};

export default ParticlesComponent;
