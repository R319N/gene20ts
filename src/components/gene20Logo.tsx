import Box from "@mui/material/Box";
import React from "react";

const Gene20Logo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        justifyContent: "center",
        justifyItems: "center",
        height: "100%",
      }}
      gap={0.5}
    >
      <img
        src="/images/our-logo/logoSmall.png"
        width="80px"
        height="24px"
        alt="logo"
      />
    </Box>
  );
};

export default Gene20Logo;
