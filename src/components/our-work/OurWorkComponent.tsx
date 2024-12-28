"use client";
import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { styles } from "@/styles/styles";
import ourProjects from "@/utils/data/our_projectsData";


// *** motion imports ***
import { motion } from "framer-motion";
import { fadeIn, } from "@/utils/motion";
import Image from "next/image";
import GlowingButton from "../glowingButton";
import GlowingButtonOutlined from "../glowingButtonOutlined";
import { TitleText } from "../CustomTexts";
import HeadingText from '../headerBanner'

const OurWorkComponent = () => {
  const displayedProjects = ourProjects.slice(0, 3);
  const headerText = "what we have\ndone so far";
  const header = <TitleText title={headerText} />;
  return (
    <Box
      sx={{
        width: "100%",
        pt: "5rem",
      }}
    >
      <HeadingText
        header={header}
        subHeader="explore some of the awesome work we have done
for our clients so far"
      />
      <Box
        width="100%"
        sx={{
          ...styles.center_flex,
          flexDirection: "column",
          overflow: "hidden",
        }}
        gap={5}
      >
        <Grid
          container
          spacing={3}
          sx={{
            ...styles.center_flex,
            width: "100%",
            px: { xs: "1rem", lg: "2rem" },
          }}
        >
          {displayedProjects.map((project, index) => (
            <Grid
              size={{ xs: 12, sm: 4, md: 4 }}
              key={index}
              sx={{
                ...styles.center_flex,
                flexDirection: "column",
              }}
            >
              <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)}>
                <Card
                  sx={{
                    ...styles.cardStyle,
                    ...styles.borderRadius,
                    width: { xs: "90vw", lg: "300px" },
                    height: "400px",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      height: "300px",
                      width: "100%",
                    }}
                  >
                    <Box
                      component={Image}
                      src={project.imgUrl}
                      alt="projects"
                      fill
                      sx={{
                        opacity: "0.8",
                        "&:active, &:active:focus, &:hover": {
                          opacity: "1",
                        },
                      }}
                    />
                  </Box>
                  <Box my="1rem" padding="0 1rem" sx={{ gap: "10" }}>
                    <Stack mb="2rem" gap={1}>
                      <Typography
                        variant="subtitle1"
                        color='#5C6584'
                        sx={{ textTransform: "uppercase" }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ textTransform: "capitalize", pl: "0.5rem" }}
                      >
                        {project.description}
                      </Typography>
                    </Stack>
                    {/* <Box
                          sx={{
                            display: "flex",
                            // justifyContent: "right",
                            alignItems: "flex-end",
                            width: "100%",
                          }}
                        > */}
                    <GlowingButtonOutlined
                      variant="outlined"
                      sx={{ zIndex: 5 }}
                    >
                      <a href={project.pageUrl}>view project</a>
                    </GlowingButtonOutlined>
                    {/* </Box> */}
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <GlowingButton>view more projects</GlowingButton>
      </Box>
    </Box>
  )
}

export default OurWorkComponent
