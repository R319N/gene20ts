import { Box, styled } from '@mui/material';
import React from 'react'
import ParticlesComponent from '../particles';
import AnimatedText from './animatedText';
import Hero from '@/components/heroComponents/Hero'

const Presentation = () => {
  const Overlay = styled(Box)({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `linear-gradient( to bottom left,  #0c0910cc,rgba(92, 92, 92, 0.93))`,
    zIndex: 2,
  });
  const BackgroundImage = styled(Box)({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundImage: `url('/creator1.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    opacity: 0.2,
    zIndex: 0,
  });


  return (
    <Box sx={{ height: "100vh", position: "relative" }}>
      <Box
      // sx={{
      //   padding: 0,
      //   backgroundImage: {
      //     xs: `url('/creator1.png')`,
      //     sm: `url('/codeback.jpg')`,
      //   },
      //   height: "100%",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   backgroundRepeat: "no-repeat",
      //   fontVariant: "small-caps",
      // }}
      >

        <Overlay />
        <BackgroundImage />
        <Box sx={{ position: "relative", overflow: "hidden" }}>
          <ParticlesComponent />
        </Box>   
        <Hero/>
        {/* <ParticlesBackground /> */}
        <Box sx={{ height: "100%" }}>
          <AnimatedText/>
          {/* <PortfolioPresentation /> */}
        </Box>
        {/* </Box> */}
      </Box>
    </Box>
  );

}

export default Presentation
