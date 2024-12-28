import React from "react";
import GlowingButtonOutlined from "./glowingButtonOutlined";
import Link from "next/link";
import GlowingOutline from "./glowingOutline";
import Typography from '@mui/material/Typography';
import { styles } from "@/styles/styles";
import FlashingIcon from "./flashing-icon";

const CAQButton = () => {
  return (
    <Link href="/#contact">
      <GlowingOutline
        sx={{ ...styles.center_flex, ...styles.borderRadius }}
        gap={2}
      >
        <Typography
          variant="body1"
          sx={{ textTransform: "capitalize", fontWeight: "regular" }}
        >
          request a quote
        </Typography>
        <FlashingIcon />
      </GlowingOutline>
    </Link>
  );
};

export default CAQButton;
