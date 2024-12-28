"use client";

import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

import React, { useState } from "react";
import ourServices from "@/utils/data/our_servicesData";

const PackadgeTabs = () => {
  const [pageTab, setPageTab] = useState(0);
  return (
    <Container sx={{ my: "0.5rem", overflow: "hidden" }}>
      <Tabs
        indicatorColor="text"
        value={pageTab}
        onChange={(e, newValue) => setPageTab(newValue)}
        sx={{
          background: "inherit",
          textColor: (theme) => theme.palette.text.main,
        }}
      >
        {ourServices.map((nav) => (
          <Tab label={nav.name} key={nav.url} />
        ))}
      </Tabs>
    </Container>
  );
};

export default PackadgeTabs;
