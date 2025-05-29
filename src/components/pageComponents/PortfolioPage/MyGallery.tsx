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
import GlowingButtonOutlined from "@/components/glowingButtonOutlined";
import PortfoliCard from "./PortfoliCard";
import { Portfolio } from "../../../../type";
import FeaturedPortfolio from "./FeaturedPortfolio";
import HeadingText from "@/components/headerBanner";
// import { getSingleProject } from "@/helpers/getSingleProject";


{/* <Layout>
        <SingleProduct product={product} />
        <Box pt="4rem">
          <HeadingText header="Trending Products" subHeader="selected trending products"/>
        </Box>
        <Grid container width="100%" spacing={2}>
          {randomTrendingProducts?.map((item: Product) => (
            <ProductCardX3
              key={item._id}
              item={{ ...item, oldPrice: item.oldPrice ?? 0 }}
            />
          ))}
        </Grid>
    </Layout>  */}
// interface Props {
//     portfolio: Portfolio[];
// }
const MyGallery = () => {
    const shuffleArray = (array: Portfolio[]) => {
        return array.sort(() => Math.random() - 0.5);
    };
    const randomPortfolio = shuffleArray(ourProjects).slice(0, 4);
    return (
        <Box>
            <HeadingText header="featured works" subHeader="here is some of the works i have done so far"/>
            <Grid container width="100%"
                spacing={{ xs: 4, lg: 1 }}
                sx={{
                    ...styles.center_flex,
                    width: "100%",
                    px: { xs: "4rem", xl: "0rem" },
                }}
            >
                {randomPortfolio?.map((item: Portfolio) => (
                    <PortfoliCard
                        key={item.id}
                        item={item}
                    />
                ))}
            </Grid>
        </Box>
    )
}
// <Grid
//     container
//     spacing={{ xs: 4, lg: 1 }}
//     sx={{
//         ...styles.center_flex,
//         width: "100%",
//         px: { xs: "4rem", xl: "0rem" },
//     }}
// >
//     {ourProjects.map((project, index) => (
//         <Grid
//             size={{ xs: 12, sm: 4, md: 3 }}
//             key={index}
//             sx={{
//                 ...styles.center_flex,
//                 flexDirection: "column",
//                 my:"1rem"

//             }}
//         >

//             <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)}>
//                 <Card
//                     sx={{
//                         ...styles.cardStyle,
//                         ...styles.borderRadius,
//                         width: { xs: "82vw", lg: "300px" },
//                         height: "200px",
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             position: "relative",
//                             height: "300px",
//                             width: "100%",
//                         }}
//                     >
//                         <Box
//                             component={Image}
//                             src={project.imgUrl}
//                             alt="projects"
//                             fill
//                             height={100}
//                             width={100}
//                             sx={{
//                                 opacity: "0.8",
//                                 "&:active, &:active:focus, &:hover": {
//                                     opacity: "1",
//                                 },
//                             }}
//                         />
//                     </Box>
{/* <Box my="1rem" padding="0 1rem" sx={{ gap: "10" }}>
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
                                <GlowingButtonOutlined
                                    variant="outlined"
                                    sx={{ zIndex: 5 }}
                                >
                                    <a href={project.pageUrl}>view project</a>
                                </GlowingButtonOutlined>
                            </Box> */}
//         </Card>

//     </motion.div>

// </Grid>

//     ))}

// </Grid>


export default MyGallery
