import React from 'react'
import { sliderVariantLeft, sliderVariantLeft2, sliderVariantRight, sliderVariantRight2 } from "@/utils/motion";
import { motion } from "framer-motion";
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { styles } from '@/styles/styles';

const SlidingTexts = () => {
    return (
        <Box sx={{ height: "100%", position: "absolute", py: "5rem", }}>
            <Box
                gap={2}
                sx={{

                    display: "block",
                    alignItems: "center",
                    whiteSpace: "nowrap",
                    justifyContent: "space-between",
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
                            sx={styles.slidingText}
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
                            sx={styles.slidingText}
                        >
                            UI/UX development
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
                            sx={styles.slidingText}
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
                            sx={styles.slidingText}
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
                            sx={styles.slidingText}
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
                            sx={styles.slidingText}
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
                            sx={styles.slidingText}
                        >
                            graphic design
                        </Typography>
                    </Box>
                </motion.div>
            </Box>
        </Box>
    )
}

export default SlidingTexts
