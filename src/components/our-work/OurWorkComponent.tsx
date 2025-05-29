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
import Image from "next/image"
import GlowingButtonOutlined from "../glowingButtonOutlined";;
import HeadingText from '../headerBanner'
import { Container, Divider, useMediaQuery, useTheme } from "@mui/material";
import GlowingIconButton from "../GlowingIconButton";
import Link from "next/link";
import { Portfolio } from "../../../type";

const OurWorkComponent = () => {
  const displayedProjects = ourProjects.slice(0, 3);
  const headerText = "what we have\ndone so far";
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  // const header = <TitleText title={headerText} />;
  return (
    <Container
      sx={{
        ...styles.container
      }}
    >
      <Box width="100%">
        <HeadingText
          header="my work"
          subHeader="explore some of the awesome work we have done
for our clients so far"
        />

        <Grid
          container
          spacing={3}
          sx={{
            width: "100%",
            padding: "0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >

          <Grid
            size={{ xs: 12, sm: 8, md: 9 }}
            sx={{
              ...styles.center_flex,
              flexDirection: "column",

            }}
          >

            <Grid
              container
              spacing={{ xs: 4, lg: 1 }}
              sx={{
                ...styles.center_flex,
                width: "100%",
                px: { xs: "4rem", xl: "0rem" },
              }}
            >
              {displayedProjects.map((project: Portfolio, index) => (
                <Grid
                  size={{ xs: 12, sm: 4, md: 4 }}
                  key={project.id}
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
                        width: { xs: "82vw", lg: "300px" },
                        height: "400px",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          height: "500px",
                          width: "100%",
                          padding: "1rem"
                        }}
                      >
                        <Box
                          component={Image}
                          src={project.imgUrl}
                          alt="projects"
                          fill
                          height={100}
                          width={100}
                          sx={{
                            opacity: "0.8",
                            "&:active, &:active:focus, &:hover": {
                              opacity: "1",
                            },
                          }}
                        />
                      </Box>
                      <Box my="1rem" padding="0 1rem"
                        sx={{
                          gap: "10", height: "100%",
                          display: "flex",
                          justifyContent: "space-between",
                          flexDirection: "column"
                        }}
                      >
                        <Stack mb="2rem" gap={1}>
                          <Typography
                            variant="subtitle1"

                            sx={{ textTransform: "uppercase", fontWeight: "Regular" }}
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color='#5C6584'
                            sx={{ textTransform: "capitalize", }}
                          >
                            {project.description}
                          </Typography>
                        </Stack>
                        <Link href={{ pathname: "/portfolio", query: { id: project.id } }}>
                          <GlowingButtonOutlined
                            variant="outlined"
                            sx={{ zIndex: 5 }}
                          >
                            view project
                          </GlowingButtonOutlined>
                        </Link>
                      </Box>
                    </Card>

                  </motion.div>


                </Grid>
              ))}

            </Grid>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 3, md: 3 }}
            sx={{
              ...styles.center_flex,
              flexDirection: "column",
            }}
          >
            <Link href={{ pathname: "/portfolio", query: { id: "jhb-shoefreaks" } }} >
              <GlowingIconButton
                bottomText="view my gallery ."
                upperText=". view my gallery"
              />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default OurWorkComponent

// const OurWorkComponent = () => {
//   const displayedProjects = ourProjects.slice(0, 3);
//   return (
//     <Grid
//       container
//       spacing={{ xs: 4, lg: 1 }}
//       sx={{
//         ...styles.center_flex,
//         width: "100%",
//         px: { xs: "4rem", xl: "0rem" },
//       }}
//     >
//       {displayedProjects.map((project: Portfolio, index) => (
//         <Grid
//           size={{ xs: 12, sm: 4, md: 4 }}
//           key={project.id}
//           sx={{
//             ...styles.center_flex,
//             flexDirection: "column",

//           }}
//         >

//           <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)}>
//             <Card sx={{ height: "100%" }}>
//               <Box padding="1rem">
//                 <Box
//                   sx={{
//                     // variant="gradient"
//                     bgColor: "red",
//                     // borderRadius="lg"
//                     // coloredShadow={color}
//                     py: 2,
//                     pr: 0.5,
//                     mt: -5,
//                     height: "12.5rem"
//                   }}

//                 >
//                   <Box
//                     component={Image}
//                     src={project.imgUrl}
//                     alt="projects"
//                     fill
//                     height={100}
//                     width={100}
//                     sx={{
//                       opacity: "0.8",
//                       "&:active, &:active:focus, &:hover": {
//                         opacity: "1",
//                       },
//                     }}
//                   />
//                 </Box>
//                 <Box sx={{ pt: "3", pb: "1", px: "1" }}>
//                   <Typography variant="h6" textTransform="capitalize">
//                     {project.title}
//                   </Typography>
//                   <Typography component="div" variant="button" color="text" fontWeight="light">
//                     {project.description}
//                   </Typography>
//                   <Divider />
//                   {/* <Box display="flex" alignItems="center"> */}
//                   {/* <Typography variant="button" color="text" lineHeight={1} sx={{ mt: 0.15, mr: 0.5 }}>
//               <Icon>schedule</Icon>
//             </Typography> */}
//                   {/* <Typography variant="button" color="text" fontWeight="light">
//               {date}
//             </MDTypography> */}
//                   {/* </Box> */}
//                   {/* </Box> */}
//                 </Box>
//               </Box>
//             </Card >
//           </motion.div>
//         </Grid>
//       ))}
//     </Grid>



//   )
// }

// export default OurWorkComponent
