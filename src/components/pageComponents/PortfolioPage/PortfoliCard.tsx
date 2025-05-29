import React from 'react'
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

interface PortfolioCardProps {
    item: {
        id: string;
        title: string;
        description: string;
        imgUrl: string;
        pageUrl: string;
        technologies?: string
    };
}

const PortfoliCard: React.FC<PortfolioCardProps> = ({ item }) => {
    return (
        <Grid
            size={{ xs: 12, sm: 4, md: 3 }}
            key={item.id}
            sx={{
                ...styles.center_flex,
                flexDirection: "column",
                my: "1rem"

            }}
        >

            {/* <motion.div variants={fadeIn("up", "spring", item.index * 0.5, 1)}> */}
                <Card
                    sx={{
                        ...styles.cardStyle,
                        ...styles.borderRadius,
                        width: { xs: "82vw", lg: "300px" },
                        height: "200px",
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
                            src={item.imgUrl}
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
                </Card>
            {/* </motion.div> */}
        </Grid>
    )
}

export default PortfoliCard
