// components/ScrambleText.js

import React, { useState, useEffect } from "react";
import styles from "./ScrambleText.module.css";
import { Box, Typography } from "@mui/material";

interface ScrambleTextProps {
  text: string;
  color?: string; // Optional href for wrapping the card with a link
}

const ScrambleText: React.FC<ScrambleTextProps> = ({ text, color }) => {
  const [scrambledText, setScrambledText] = useState("");
  const [scrambling, setScrambling] = useState(true);

  useEffect(() => {
    const scrambleTimer = setTimeout(() => {
      setScrambling(false);
    }, 3000); // Stop scrambling after 5 seconds (adjust as needed)

    return () => clearTimeout(scrambleTimer);
  }, []);

  useEffect(() => {
    if (scrambling) {
      const scrambleInterval = setInterval(() => {
        // Scramble the text
        const newText = scrambleText(text);
        setScrambledText(newText);
      }, 100); // Adjust the speed of scrambling

      return () => clearInterval(scrambleInterval);
    } else {
      // Stop scrambling and display the correct text
      setScrambledText(text);
    }
  }, [text, scrambling]);

  const scrambleText = (text: string): string => {
    // Scramble the text by shuffling characters
    const shuffledText = text
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
    return shuffledText;
  };

  return (
    <Box>
      <Typography
        variant="h1"
        textTransform="uppercase"
        fontWeight={(theme) => theme.typography.fontWeightBold}
        style={{ color }}
        className={styles.scrambleText}
      >
        {scrambledText}
      </Typography>
    </Box>
  );
};

export default ScrambleText;
