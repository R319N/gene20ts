import React from 'react'


import Grid from '@mui/material/Grid2';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import GlowingButtonOutlined from '../glowingButtonOutlined';
import HeadingText from '../headerBanner';
import PackadgeItem from "./packagdeItem";
import { TitleText } from "../CustomTexts";
import { styles } from '@/styles/styles';
import { packagesData } from '@/utils/data/prizingData';
import PricePlanCardMobile from './PrizingMobile';


const PrizingDetailsPC = () => {
    return (
        <Grid
            container
            spacing={4}
            sx={{ px: { sm: "2rem", xlg: "calc(100vw - 20%)" } }}
        >
            {packagesData.map((offer, index) => (
                <Grid size={{ xs: 12, lg: 4 }} key={offer.slug}>
                    <PackadgeItem
                        offer={offer}
                        index={index}
                        isCenter={index === 1}
                    ></PackadgeItem>
                </Grid>
            ))}
        </Grid>
    );
};


const OurPrizingModelComponent: React.FC = () => {
    const header = <TitleText title="prizing" />;
    const [expanded, setExpanded] = React.useState<string | false>("panel1");

    const handleChange =
        (panel: string) =>
            (event: React.ChangeEvent<{}>, newExpanded: boolean): void => {
                setExpanded(newExpanded ? panel : false);
            };

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <Box
            sx={{
                width: "100%",
                pt: "5rem",
            }}
        >
            <HeadingText header={header} subHeader="our prizing model" />
            <Box
                width="100%"
                mx="auto"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    overflow: "hidden",
                }}
            >
                {isSmallScreen ? (
                    <PricePlanCardMobile />

                ) : (
                    <PrizingDetailsPC />
                )}
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        my: "1rem",
                        gap: 2,
                    }}
                >
                    <Typography variant="body1" textTransform="capitalize">
                        Get the right suitable quote for your business.
                    </Typography>
                    <GlowingButtonOutlined href='/create-your-quote'>Discuss your website!</GlowingButtonOutlined>
                </Box>
            </Box>
        </Box>
    );
};

export default OurPrizingModelComponent
