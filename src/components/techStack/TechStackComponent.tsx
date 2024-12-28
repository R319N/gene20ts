"use client";
import Box from "@mui/material/Box";
import React from "react";
import Typography from '@mui/material/Typography';
import { styles } from "@/styles/styles";
import { TitleText } from "../CustomTexts";
import HeadingText from "../headerBanner";
import Stack from "./Stack";

const TechStackComponent = () => {
  const headerText = "technologies\nwe use"
  const header = <TitleText title={headerText} />;
  return (
    <Box
      sx={{
        ...styles.center_flex,
        flexDirection: "column",
        width: "100%",
        mt: "2rem",
      }}
    >
      <Typography
        variant="body2"
        textAlign="center"
        sx={{ width: { xs: "80%", md: "40vw" } }}
      >
        Our development excellence is powered by a curated tech stack that
        transforms ideas into groundbreaking solutions. From robust back-end
        frameworks to sleek front-end technologies, we use the best tools to
        drive efficiency, scalability, and innovation. Discover the technologies
        that set us apart in the digital realm.
      </Typography>
      <Typography
        variant="body1"
        sx={{ mt: "5rem", fontVariant: "all-small-caps" }}
      >
        <span style={{ color: "#9A48D0" }}>Innovate</span>-
        <span style={{ color: "#449DD1" }}>Integrate</span> -
        <span style={{ color: "#DEC5E3" }}>Elevate</span>
      </Typography>
      <HeadingText header={header} />
      <Stack />
    </Box>
  );
};

export default TechStackComponent;
