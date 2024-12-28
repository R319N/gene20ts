'use client'
//  *** react imports and next imports ***
import React from "react";

// *** MUI5 imports ***
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

// *** MY COMPONENTS ***
import DeepFooter from "./deepFooter";
import Address from "./address";
import GlowingButton from "../glowingButton";
import { styles } from "@/styles/styles";
import Navigation from "./navigation";
import Explore from "./explore";
import SocialContacts from "./socialContact";


// *** CSS IMPORTS ***

const Footer = () => {
  return (
    <div
      style={{
        zIndex: 99,
        width: "100%",
        // padding:"0 10rem"
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          display: { xs: "block", md: "flex-column" },
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          // marginY: "1vh",
          padding: { xs: "0.5rem", md: "0 5vw" },
        }}
      >
        <>
          <Divider />
        </>

        <Grid
          container
          spacing={2}
          sx={{
            px: { xs: "1rem", md: "10vw" },
            mt: "0.5rem",
            mb: "3rem",
            display: "flex",
            position: "relative",
          }}
        >
          <Grid item xs={6} sm={3}>
            <Box mb="1rem">
              <Explore />
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box mb="1rem">
              <Navigation />
            </Box>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Box mb="1rem">
              <Address />
            </Box>
          </Grid>

          <Grid item xs={12} sm={3}>
            <Box
              sx={{
                ...styles.center_flex,
                // ...styles.between_flex,
                justifyContent: "center",
                flexDirection: "column",
                width: "100%",
                // flexDirection: { xs: "row", md: "column" },
              }}
            >
              <Box position="relative" maxHeight="200px">
                <Box
                  component="img"
                  sx={{
                    width: "100%",
                    height: { xs: "100%", md: "100%" },
                    maxWidth: { xs: "20vw", md: "8vw" },
                    my: "0.5rem",
                    mx: "4rem",
                  }}
                  alt="Responsive"
                  src="/posterLogo.png"
                />
              </Box>
              <a href="#contact">
                <GlowingButton
                  variant="outlined"
                  type="button"
                  size="small"
                  style={{
                    width: { xs: "80px", md: "240px" },
                    height: "30px",
                    fontSize: "10px",
                  }}
                >
                  Let&apos;s discuss your project
                </GlowingButton>
              </a>
            </Box>
          </Grid>
        </Grid>
        <Box
          my="1rem"
          sx={{ ...styles.center_flex, flexDirection: "column" }}
          gap={2}
        >
          <SocialContacts />
        </Box>
        <Divider />
        <Box>
          <DeepFooter />
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
