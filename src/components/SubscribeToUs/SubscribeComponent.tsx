import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import React from 'react'
import HeadingText from '../headerBanner';
import { TitleText } from '../CustomTexts';
import { styles } from '@/styles/styles';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import SubscribeForm from './SubscribeForm';
// import { Poppins } from 'next/font/google';
import pxToRem from '@/utils/darkTheme/functions/pxToRem';


// const poppins = Poppins({
//     subsets: ['latin'],
//     weight: '900', // Set the font weight to the boldest available
// });


const SubscribeComponent = () => {
    const header = <TitleText title="subscribe to us" />
    const typography1 = "Stay up\nto date";



    return (
        <Box
            sx={{ ...styles.column_flex, width: "100%", px: { xs: "1rem", lg: "2rem" }, py: "5rem", }}
        >
            <HeadingText
                header={header}
                subHeader="Subscribe to our newsletter for web design and development tips, industry insights, and updates on our services."
            />
            <Card sx={{
                border: "0.5px solid #DEC5E350",
                width: { xs: "100%", md: "60vw" },
                backgroundImage: "linear-gradient(45deg, #449DD122 0%, #9A48D022 100%)",
                backdropFilter: "blur(10px)",
                p: "2rem 4rem"
            }}>
                <Grid container spacing={4}>
                    <Grid size={{ xs: 12, md: 6 }} >
                        <Typography
                            color="primary"
                            textTransform="uppercase"
                            whiteSpace="pre-line"
                            sx={{
                                background: "linear-gradient(360deg, #449DD155 0%, #DEC5E355 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                WebkitTextStroke: "1px #DEC5E377",
                                fontWeight: (theme) => theme.typography.fontWeightBold,
                                // fontFamily: poppins.style.fontFamily,
                                fontSize: {
                                    xs: pxToRem(48),
                                    md: pxToRem(64),
                                    lg: pxToRem(72),
                                    xlg: pxToRem(72),
                                },
                                lineHeight: 1
                            }}
                        >
                            {typography1}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <SubscribeForm />
                    </Grid>
                </Grid>
            </Card>
        </Box>

    )
}

export default SubscribeComponent
