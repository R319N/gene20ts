// this component was coded by wilfred reign for portfolio presentation
// website:  www.wilfredreign.netlify.app
// facebook: wilfred reign
// contact : +27 61 202 3165
// whatsapp: +27 61 202 3165

import { TypingText } from "@/components/CustomTexts";
import { slideIn, sliderVariant, staggerContainer } from "@/utils/motion";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import GlowingButton from "../glowingButton";
import GlowingButtonOutlined from "../glowingButtonOutlined";

const PortfolioPresentation = (props) => {
  const subHeader = (
    <TypingText title="freelance web developer" textStyles="text-center" />
  );

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Box
        height="100vh"
        sx={{
          display: "flex",
          // alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
        }}
      >
        <Grid
          container
          align="center"
          sx={{
            margin: "0px",
            // height "100vh",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Grid item xs={12} sm={6} align="center">
            <Box sx={{ height: "100vh", display: { xs: "none", sm: "block" } }}>
              <Image
                src="/creator3.png"
                alt="developer"
                width={400}
                height={400}
                style={{ width: "100%", height: "100%", opacity: "0.5" }}
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            align="center"
            sx={{
              position: "relative",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              justifyItems: "center",
            }}
          >
            <Box
              width="100%"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <motion.div variants={slideIn("right", "tween", 0.2, 1)}>
                <Box sx={{ display: "flex", alignItems: "center" }} gap={1}>
                  <Typography
                    variant="body1"
                    sx={{
                      textTransform: "uppercase",
                      display: "flex",
                      fontSize: { xs: "1.5em", sm: "2em" },
                      fontWeight: (theme) => theme.typography.fontWeightRegular,
                      justifySelf: "center",
                      color: (theme) => theme.palette.primary.main,
                      letterSpacing: "2px",
                    }}
                  >
                    wilfred
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      textTransform: "uppercase",
                      letterSpacing: "2px",
                      fontSize: { xs: "1.5em", sm: "2em" },
                      fontWeight: (theme) => theme.typography.fontWeightRegular,
                      display: "flex",
                      justifySelf: "center",
                      color: (theme) => theme.palette.secondary.main,
                    }}
                  >
                    reign
                  </Typography>
                </Box>
                <Divider />
              </motion.div>
              <motion.div variants={slideIn("center", "tween", 0.2, 1)}>
                <Typography
                  variant="h5"
                  fontWeight={(theme) => theme.typography.fontWeightLight}
                  align="center"
                  sx={{
                    backgroundImage: `linear-gradient(44deg , #fff ,  #00ffff ,#0000ff, #ff00ff , #ff0000 )`,
                    color: "transparent",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: (theme) => theme.typography.fontWeightLight,
                    width: "100%",
                  }}
                >
                  {subHeader}
                </Typography>
              </motion.div>
              <Box
                gap={2}
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "",
                  pt: "10vh",
                  zIndex: "99",
                }}
              >
                <a href="#projects">
                  <GlowingButton variant="contained" type="button">
                    view Projects
                  </GlowingButton>
                </a>
                <a href="#about">
                  <GlowingButtonOutlined
                    variant="outlined"
                    color="secondary"
                    sx={{
                      color: "white",
                    }}
                    // endIcon={<ArrowDownward />}
                  >
                    explore more
                  </GlowingButtonOutlined>
                </a>
              </Box>
            </Box>
          </Grid>
          <Box
            item
            xs={12}
            sm={6}
            align="center"
            sx={{
              display: "flex",
              alignItems: "center",
              position: "absolute",
              whiteSpace: "nowrap",
              bottom: "30px",
              opacity: "0.1",
              width: "100%",
              zIndex: 1,
            }}
          >
            <motion.div
              variants={sliderVariant}
              initial="initial"
              animate="animate"
            >
              <Box>
                <Typography
                  variant="h1"
                  color="primary"
                  sx={{
                    fontSize: "30vh",
                    whiteSpace: "nowrap",
                  }}
                >
                  ui/ux developer. website designer.
                </Typography>
              </Box>
            </motion.div>
          </Box>
        </Grid>
      </Box>
    </motion.div>
  );
};

export default PortfolioPresentation;
