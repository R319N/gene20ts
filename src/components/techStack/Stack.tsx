'use client'
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import Image from "next/image";
import { styled} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid2';
import { stacks } from "@/utils/data/stackData";
import { styles } from "@/styles/styles";

const Stack = () => {
    const ResponsiveImage = styled(Image)(({ theme }) => ({
        width: "100%",
        height: "auto",
        [theme.breakpoints.down("sm")]: {
            height: "3.5vh", // Example for small screens
        },
        [theme.breakpoints.up("md")]: {
            height: "200px", // Example for medium screens
        },
        [theme.breakpoints.up("lg")]: {
            height: "4vh", // Example for large screens
        },
    }));

    return (
        <Grid
            container
            sx={{
                ...styles.center_flex,
                width: "100%",
                px: { xs: "2rem", md: "5rem" },
                my: "3rem",
            }}
        >
            {stacks.map((item, index) => (
                <Grid
                    size={{ xs: 2.4, md: 2.4 }}
                    key={index}
                    sx={{ ...styles.center_flex, mb: "3rem" }}
                >
                    <motion.div variants={fadeIn("up", "spring", index * 0.2, 1)}>
                        <Avatar
                            sx={{
                                ...styles.center_flex,
                                width: { xs: "6vh", lg: "7vh" },
                                height: { xs: "6vh", lg: "7vh" },
                                p: "0.5rem"
                            }}
                        >
                            <ResponsiveImage
                                src={item.imgUrl}
                                width={40}
                                height={40}
                                alt={`${item.title} icon`}
                            />
                        </Avatar>
                    </motion.div>
                </Grid>
            ))}
        </Grid>
    );
};

export default Stack;
