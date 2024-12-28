'use client'
import Box from '@mui/material/Box';
import React from 'react';
import ParticlesComponent from '../particles';
import { styled } from '@mui/material';
import Heading from './heading';
import { styles } from '@/styles/styles';
import SlidingTexts from './SlidingTexts';

const BackgroundImage = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `url('/bg.jpg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  opacity: 0.2,
  zIndex: 0,
});

const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundImage: `linear-gradient(45deg, #449DD150 0%, #9A48D050 100%)`,
  zIndex: 2,
});

const Content = styled(Box)({
  ...styles.center_flex,
  position: "relative",
  zIndex: 3,
  color: "white",
  width: "100%",
  top: "50%",
  px: "2rem",
  transform: "translateY(-50%)",
});

const Presentation = () => {
  return (
    <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <BackgroundImage />
      <Overlay />
      <SlidingTexts />
      <Content>
        <Heading />
      </Content>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1, // Below the content but above the background
        }}
      >
      </Box>
    </Box>
  );
};

export default Presentation;
