"use client";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styles } from "@/styles/styles";
import pxToRem from "@/utils/darkTheme/functions/pxToRem";
import CAQButton from "../caqButton";
import { fadeIn } from "@/utils/motion";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
// import { Poppins } from "next/font/google";

// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: '900', // Set the font weight to the boldest available
// });

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
        gap={8}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Main Heading */}
        <Stack
          sx={{
            textAlign: "center",
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
                fontSize: { xs: pxToRem(36), md: pxToRem(64), xl: pxToRem(72) },
                lineHeight: "1",
                color: "#449DD1",
                // fontFamily: poppins.style.fontFamily,
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
                WebkitTextStroke: "1px #DEC5E377",
                fontWeight: (theme) => theme.typography.fontWeightBold,
                whiteSpace: "nowrap",
                // fontFamily: poppins.style.fontFamily,
                fontSize: {
                  xs: pxToRem(32),
                  md: pxToRem(64),
                  lg: pxToRem(72),
                  xlg: pxToRem(72),
                },
              }}
            >
              Digital Experiences
            </Typography>
          </motion.div>
        </Stack>

        {/* Description */}
        <motion.div variants={fadeIn("up", "spring")}>
          <Typography
          variant="body1"
            sx={{
              // ...styles.fontSize,
              textAlign: "center",
              fontWeight: (theme) => theme.typography.fontWeightRegular,
              overflow: "hidden",
              width: { xs: "100%", lg: "100%" },
              textTransform: "capitalize",
              px: { xs: "1rem", md: "5rem", xl: "20rem" },
              fontSize: { xs: pxToRem(14), md: "20px", lg: "18px" },
            }}
          >
            Elevate your brand with our comprehensive tech services. From
            innovative web and graphic design to cutting-edge software
            development, we guide you through every step of the product
            development lifecycle. Partner with a dedicated team committed to
            helping your product thrive in the market.
          </Typography>
        </motion.div>

        {/* <Stack
          direction="row"
          gap={2}
          sx={{
            ...styles.center_flex,
            justifyContent: { xs: "center", lg: "left" },
          }}
        >
        
        </Stack> */}
        <CAQButton />
      </Stack>
    </motion.div>
  );
};

export default Heading;
