import { Box, Typography } from '@mui/material'
import React from 'react'
import GlowingText from './Texts/glowingText'
import { motion } from 'framer-motion'
import { styles } from '@/styles/styles'

const Logo = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <Box
                sx={{
                    display: "flex",

                    alignItems: "center",
                    cursor: "pointer",
                }}
            >

                <GlowingText
                    variant="body1"
                    sx={{
                        ...styles.glowingText,
                        textTransform: "capitalize",
                        display: "flex",
                        fontSize: { xs: "1.5em", sm: "22px" },
                        fontweight: "bold",
                        color: (theme) => theme.palette.primary.main,
                        textShadow:
                            "0 0 2px #00f, 0 0 5px #00f, 0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f, 0 0 40px #00f, 0 0 60px #00f",
                        animation: "$glow 1s ease-in-out infinite alternate",
                    }}
                >
                    wilfred
                </GlowingText>
                &nbsp;
                <GlowingText
                    variant="body1"
                    sx={{
                        textTransform: "capitalize",
                        display: "flex",
                        fontSize: { xs: "1.5em", sm: "22px" },
                        justifySelf: "center",
                        color: "GrayText",
                        textShadow:
                            "0 0 2px rgb(186, 0, 192), 0 0 5px rgb(163, 30, 216), 0 0 10px rgb(76, 2, 110), 0 0 20px rgb(33, 0, 151)",
                        animation: "$glow 1s ease-in-out infinite alternate",
                    }}
                >
                    reign
                </GlowingText>
            </Box>
        </motion.div>
    )
}

export default Logo
