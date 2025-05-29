import dynamic from "next/dynamic";
import React from "react";

const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false });
const ParticlesBackground = () => {
  return (
    <div>
      <ParticlesBg
        num={50}
        density={50}
        type="cobweb"
        color={["#E22866"]}
        bg={{
          position: "absolute",
          zIndex: 999,
          height: "100%",
          width: "100%",
          opacity: "0.3",
          color: "#ffffff",
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
