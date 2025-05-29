import React, { useEffect, useState } from "react";
import { Box, Divider, LinearProgress, Stack } from "@mui/material";
import ScrambleText from "@/components/Texts/ScrambledText/scrambleText";


const Loading = () => {

  const [loading, setLoading] = useState(0)
  useEffect(() => {

    const timer = setInterval(() => {
      setLoading((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          return 100
        }
        return Math.min(oldProgress + 20, 100);
      });
    }, 600)
    return () => {
      clearInterval(timer)
    };
  }, [])
  const name = "wilfred";
  const surname = "reign";
  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Box gap={2}>
        <div className="gradient-01" />
        <Box style={{ display: "flex" }} gap={2}>
          <ScrambleText color="#3772FF" text={name} />
          <ScrambleText color="#D81E5B" text={surname} />
        </Box>
        <Divider />
        <LinearProgress variant="determinate" value={loading} />

      </Box>
    </Stack>
  );
};

export default Loading;
