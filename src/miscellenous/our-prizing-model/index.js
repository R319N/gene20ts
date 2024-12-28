import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styles } from "@/styles/styles";
import GlowingButtonOutlined from "../glowingButtonOutlined";
import PackadgeItem from "./packagdeItem";
import PrizingModelMobile from "./PrizingMobile";
import { TitleText } from "../CustomTexts";
import HeaderBanner from "../headerBanner";

import packadgesData from "@/utils/data/prizingData";

const OurPrizingModelComponent = () => {
  const header = <TitleText title="prizing" />;
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

  const PrizingDetailsPC = () => {
    return (
      <Grid
        container
        spacing={4}
        sx={{ px: { sm: "0", xlg: "calc(100vw - 10%)" } }}
      >
        {packadgesData.map((offer, index) => (
          <Grid item xs={12} lg={4} key={offer.slug}>
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

  return (
    <Box
      sx={{
        width: "100%",
        pt: "5rem",
      }}
    >
      <HeaderBanner header={header} subHeader="our prizing model" />
      <Box
        width="100%"
        mx="auto"
        sx={{
          ...styles.center_flex,
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        {isSmallScreen ? (
          <PrizingModelMobile />
        ) : (
          <PrizingDetailsPC></PrizingDetailsPC>
        )}
        <Box
          sx={{ ...styles.center_flex, flexDirection: "column", my: "1rem" }}
          gap={2}
        >
          <Typography variant="body1" textTransform="capitalize">
            get the right suitable qoute for your business,
          </Typography>
          <GlowingButtonOutlined>discuss your website!</GlowingButtonOutlined>
        </Box>
      </Box>
    </Box>
  );
};

export default OurPrizingModelComponent;
