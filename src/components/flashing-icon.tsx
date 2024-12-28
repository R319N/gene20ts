import React from "react";
import Box from '@mui/material/Box';
import { motion } from "framer-motion";

const FlashingIcon = () => {
  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "50%",
        height: "28px",
        width: "28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `linear-gradient(45deg, #449DD130 0%, #9A48D030 100%)`,
        border: "1px solid #DEC5E350",
        backdropFilter: "blur(7px)",
      }}
    >
      {/* First Layer of Rays */}
      <motion.div
        initial={{ opacity: 0.5, scale: 1 }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          margin: "auto",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0) 60%, rgba(255,255,255,0.5) 100%)",
          zIndex: 1,
        }}
      />
      {/* Second, Smaller Larger Layer of Rays */}
      <motion.div
        initial={{ opacity: 0.5, scale: 1 }}
        animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          position: "absolute",
          top: "-2px", // Reduced to decrease size
          left: "-2px",
          right: "-2px",
          bottom: "-2px",
          margin: "auto",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0) 50%, rgba(255,255,255,0.3) 100%)",
          zIndex: 0,
        }}
      />
      <img
        src="arrow.svg"
        alt="arrow"
        style={{
          height: "14px",
          width: "14px",
          position: "relative",
          zIndex: 2,
        }}
      />
    </Box>
  );
};

export default FlashingIcon;
