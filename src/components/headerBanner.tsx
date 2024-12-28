"use client";
import { styles } from "@/styles/styles";
import { useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ReactElement, ReactNode } from "react";

interface HeaderBannerProps {
  header: string | ReactElement;
  subHeader?: string;
}
const HeadingText: React.FC<HeaderBannerProps> = ({ header, subHeader }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (

    <Box
      my="1.5rem"
      px="1rem"
      gap={2}
      sx={{ ...styles.center_flex, flexDirection: "column" }}
    >
      <span

        className="blanka-font"
        style={{
          background: "linear-gradient(360deg, #449DD1 0%, #DEC5E3 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          // textFillColor: "transparent",
          fontSize: isSmallScreen
            ? theme.typography.pxToRem(20)
            : theme.typography.pxToRem(22),
          whiteSpace: "pre-line",
          fontWeight: "bold",
          textTransform: "uppercase",
          textAlign: "center",
          letterSpacing: 2,
          lineHeight: 1.2,
        }}
      >
        {header}
      </span>
      {/* <Box sx={{ textAlign: "center",}}> */}
      <Typography
        variant="subtitle2"
        align="center"
        sx={{
          fontWeight: theme.typography.fontWeightRegular,
          width: { xs: "100%", md: "80%" },
          fontSize: isSmallScreen
            ? theme.typography.pxToRem(14)
            : theme.typography.pxToRem(16),
          textTransform: "capitalize",
          textAlign: "center",
          color: "#5C6584",
          px: { xs: "1rem", lg: "12vw" }
        }}
      >
        {subHeader}
      </Typography>
      {/* </Box> */}
    </Box>
  );
};

export default HeadingText;
