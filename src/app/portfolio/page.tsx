'use client'
import React from 'react';
import Box from '@mui/material/Box';
import RootLayout from '../layout';
import ServerLayout from '../serverLayout';
import Paper from '@mui/material/Paper';
import Appbar from '@/components/navigation/Appbar';
import Footer from '@/sections/Footer';
import { Container, Stack, Typography } from '@mui/material';
import { styles } from '@/styles/styles';
import FeaturedPortfolio from '@/components/pageComponents/PortfolioPage/FeaturedPortfolio';
import { getSingleProject } from '@/helpers/getSingleProject';
import MyGallery from '@/components/pageComponents/PortfolioPage/MyGallery';
import { motion } from "framer-motion"
import DownArrow from "@mui/icons-material/SwipeDown"
import { scrollButtonVariant } from '@/utils/motion';
type Props = {
  searchParams: { [key: string]: string }
}

const Portfolio = ({ searchParams }: Props) => {
  const _id = searchParams?.id;
  // const _id = Number(_idString);
  // const _idParam = searchParams?.id;
  // const _id = Array.isArray(_idParam) ? _idParam[0] : _idParam;
  const portfolio = getSingleProject(_id)
  // ourProjects.find((item) => item._id === _id)
  return (
    <ServerLayout>
      <RootLayout>
        <Paper
          sx={{
            minHeight: "100vh",
            height: "100%",
            width: "100%",
            overflow: "hidden",
            borderRadius: "0",
            margin: 0,
          }}
        >
          <Appbar />
          <div className="gradient-03" />
          <Box sx={{ position: "relative" }}>
            <section>
              <Container sx={{ ...styles.container, justifyContent: { xs: "center", xl: "flex-start" } }}>
                <Stack my="2rem" alignItems={{ xs: "left", xl: "center" }} >
                  <Typography variant='h2'
                    sx={{
                      fontWeight: "lighter", textTransform: "uppercase",
                      fontSize: { xs: "22px", xl: "42px" }
                    }}
                  >
                    welcome to my gallery
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: (theme) => theme.typography.fontWeightLight,
                      fontSize: { xs: "14px", xl: "16px" },
                      textTransform: "capitalize",
                      color: (theme) => theme.palette.text.secondary,
                    }}>
                    welcome to my gallery
                  </Typography>
                </Stack>
                <FeaturedPortfolio portfolio={portfolio} />
                <div style={{ ...styles.center_flex, width: "100%" }}>
                  {/*   <Box sx={{
                    height: "160px", width: "160px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // flexDirection: "column",
                    // my:"2rem"
                  }}> */}
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      // backgroundImage: `linear-gradient(45deg, #449DD130 0%, #9A48D030 100%)`,
                      // border: "1px solid #DEC5E350",
                      backdropFilter: "blur(7px)",
                      zIndex: 2,
                      position: "relative",
                      height: "100%",
                      width: "220px",
                    }}
                  >
                    <Box
                      style={{
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        backdropFilter: "blur(7px)",
                        zIndex: 2,
                        position: "relative",
                        height: "160px",
                        width: "160px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "160px",
                          height: "160px",
                        }}
                      >

                        <svg viewBox="0 0 160 160" width="160" height="160">
                          <path
                            id="topArc"
                            d="M 80,80 m -55,0 a 55,55 0 0,1 110,0"
                            fill="none"
                            stroke="none"
                          />
                          <text fontSize="16px" fill="#716679" fontFamily="Arial" letterSpacing="1.5" fontVariant="all-small-caps">
                            <textPath href="#topArc" startOffset="50%" textAnchor="middle">
                              more projects
                            </textPath>
                          </text>
                        </svg>
                      </div>
                      <motion.div animate={scrollButtonVariant}>
                        <Box
                          sx={{
                            borderRadius: "50%",
                            height: "40px",
                            width: "40px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundImage: `linear-gradient(45deg,rgba(68, 157, 209, 0.49) 0%,rgba(154, 72, 208, 0.5) 100%)`,
                            border: "1px solid #DEC5E350",
                            backdropFilter: "blur(7px)",
                            zIndex: 2,
                            ...styles.scaleHover
                          }}
                        >

                          <DownArrow sx={{ fontSize: '28px', fontWeight: "lighter" }} />

                        </Box>
                      </motion.div>
                    </Box>
                  </Box>
                </div>
                <MyGallery />
              </Container>
            </section>
            <div className="feedback-gradient" />
            <Footer />
          </Box>
        </Paper>
      </RootLayout>
    </ServerLayout>
  );
};

export default Portfolio
