import React from 'react'
import { sliderVariantLeft, sliderVariantLeft2, sliderVariantRight, sliderVariantRight2 } from "@/utils/motion";
import { motion } from "framer-motion";
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

const SlidingTexts = () => {
    return (
        <Box sx={{ height: "100%", position: "absolute", py: "5rem", }}>
            <Stack
                gap={1}
                sx={{

                    display: "block",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                    // bottom: "30px",
                    opacity: "0.1",
                    width: "100%",
                    zIndex: 1,
                }}
            >
                <motion.div
                    variants={sliderVariantLeft}
                    initial="initial"
                    animate="animate"
                >
                    <Box>
                        <Typography
                            variant="h1"
                            color="secondary"
                            sx={{
                                fontSize: { xs: '8vh', md: '15vh', lg: '5rem' },
                                whiteSpace: "nowrap",
                                textTransform: "capitalize",
                            }}
                        >
                            website development
                        </Typography>
                    </Box>
                </motion.div>
                <motion.div
                    variants={sliderVariantRight}
                    initial="initial"
                    animate="animate"
                >
                    <Box>
                        <Typography
                            variant="h1"
                            color="textPrimary"
                            sx={{
                                fontSize: { xs: '8vh', md: '15vh', lg: '5rem' },
                                whiteSpace: "nowrap",
                                textTransform: "capitalize"
                            }}
                        >
                            ui/ux development
                        </Typography>
                    </Box>
                </motion.div>
                <motion.div
                    variants={sliderVariantLeft2}
                    initial="initial"
                    animate="animate"
                >
                    <Box>
                        <Typography
                            variant="h1"
                            color="primary"
                            sx={{
                                fontSize: { xs: '8vh', md: '15vh', lg: '5rem' },
                                whiteSpace: "nowrap",
                                textTransform: "capitalize",
                            }}
                        >
                            video editing.
                        </Typography>
                    </Box>
                </motion.div>
                <motion.div
                    variants={sliderVariantRight2}
                    initial="initial"
                    animate="animate"
                >
                    <Box>
                        <Typography
                            variant="h1"
                            color="secondary"
                            sx={{
                                fontSize: { xs: '8vh', md: '15vh', lg: '5rem' },
                                whiteSpace: "nowrap",
                            }}
                        >
                            software development.
                        </Typography>
                    </Box>
                </motion.div>
                <motion.div
                    variants={sliderVariantLeft}
                    initial="initial"
                    animate="animate"
                >
                    <Box>
                        <Typography
                            variant="h1"
                            color="primary"
                            sx={{
                                fontSize: { xs: '8vh', md: '15vh', lg: '5rem' },
                                whiteSpace: "nowrap",
                                textTransform: "capitalize",
                            }}
                        >
                            web design
                        </Typography>
                    </Box>
                </motion.div>
                <motion.div
                    variants={sliderVariantRight}
                    initial="initial"
                    animate="animate"
                >
                    <Box>
                        <Typography
                            variant="h1"
                            color="textPrimary"
                            sx={{
                                fontSize: { xs: '8vh', md: '15vh', lg: '5rem' },
                                whiteSpace: "nowrap",
                            }}
                        >
                            mobile development.
                        </Typography>
                    </Box>
                </motion.div>
                <motion.div
                    variants={sliderVariantLeft2}
                    initial="initial"
                    animate="animate"
                >
                    <Box>
                        <Typography
                            variant="h1"
                            color="secondary"
                            sx={{
                                fontSize: { xs: '8vh', md: '15vh', lg: '5rem' },
                                whiteSpace: "nowrap",
                                textTransform: "capitalize",
                            }}
                        >
                            graphic design
                        </Typography>
                    </Box>
                </motion.div>
            </Stack>
        </Box>
    )
}

export default SlidingTexts
