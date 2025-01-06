"use client";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styles } from "@/styles/styles";
import CAQButton from "../caqButton";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { Poppins } from "next/font/google";
import Box from '@mui/material/Box';
import pxToRem from "@/utils/darkTheme/functions/pxToRem";
const poppins = Poppins({
  subsets: ['latin'],
  weight: '900', // Set the font weight to the boldest available
});
const Heading = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      style={{ margin: "auto", flexDirection: "column" }}
    >
      <Stack
        gap={{ xs: 4, sm: 4 }}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          // height:"100vh",
          alignItems: "center",
          // px: { xs: "1rem", md: "5rem", xl: "20rem" },

        }}
      >
        <Stack
          sx={{
            textAlign: { xs: "left", md: "center" },
            justifyContent: "center",
            alignItems: "center",
          }}
          gap={1}
        >
          <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
            <Typography
              variant="h1"
              textTransform="uppercase"
              sx={{
                WebkitTextStroke: "1px #DEC5E322",
                fontWeight: (theme) => theme.typography.fontWeightBold,
                fontSize: {
                  xs: pxToRem(28),
                  sm: pxToRem(64), 
                  md: pxToRem(68), 
                  lg: pxToRem(82),
                  // xl: pxToRem(82)
                },
                lineHeight: "0.8",
                color: "#449DD1",
                whiteSpace: "nowrap",
              }}
            >
              Crafting Exceptional
            </Typography>
          </motion.div>
          <motion.div variants={fadeIn("right", "tween", 0.2, 1)}>
            <Typography
              color="primary"
              textTransform="uppercase"
              whiteSpace="nowrap"
              sx={{
                color: "#e3e3ff22", // Transparent center
                WebkitTextStroke: `1px #DEC5E377`,
                fontWeight: (theme) => theme.typography.fontWeightBold,
                whiteSpace: "nowrap",
                fontSize: {
                  xs: pxToRem(28),
                  sm: pxToRem(64), 
                  md: pxToRem(68), 
                  lg: pxToRem(76),
                  // xl: pxToRem(86)
                },
              }}
            >
              Digital Experiences
            </Typography>
          </motion.div>
        </Stack>
        <Stack sx={{ px: { xs: "1rem", md: "5rem", lg: "16rem"} }}>
          <motion.div variants={fadeIn("up", "spring")}>

            <Typography
              variant="body2"
              sx={{
                textAlign: { xs: "center", md: "center" },
                fontWeight: (theme) => theme.typography.fontWeightRegular,
                overflow: "hidden",
                width: { xs: "100%", lg: "100%" },
                textTransform: "capitalize",
                fontSize: { xs: pxToRem(12), sm: pxToRem(12), md: pxToRem(16), lg: pxToRem(18) },
              }}
            >
              Elevate your brand with our comprehensive tech services. From
              innovative web and graphic design to cutting-edge software
              development, we guide you through every step of the product
              development lifecycle. Partner with a dedicated team committed to
              helping your product thrive in the market.
            </Typography>

          </motion.div>
        </Stack>
        <Box sx={{ mt: { xs: "6rem", sm: "8rem" } }}><CAQButton />
        </Box>
      </Stack>
    </motion.div>
  );
};

export default Heading;
