"use client"
import React, { useEffect } from "react";

//layouts
import RootLayout from "./layout";
import ServerLayout from "./serverLayout";

//mui imports
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

//components
import Loading from "@/examples/loading";
import Appbar from '@/components/navigation/Appbar'

// sections
import HeroSection from "@/sections/HeroSection";
import OurServices from "@/sections/ourServices";
import OurWork from "@/sections/ourWork";
import ContactUs from "@/sections/contact_us";
import TechStack from "@/sections/techStack";
import FooterSection from "@/sections/Footer";


export default function Home() {

  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    const loadData = async () => {
      // Add your asynchronous data loading logic here
      // For example, fetch data from an API or perform initial setup

      // Simulate a delay (replace this with your actual data loading logic)
      await new Promise((resolve) => setTimeout(resolve, 4000));

      // Set loading to false once data is loaded
      setLoading(false);
    };

    loadData();
  }, []);



  return (
    <ServerLayout>
      <RootLayout>
        <Paper
          sx={{
            minHeight: "100vh",
            height: "100%",
            width: "100%",
            overflow: "hidden",
            borderRadius: "0",
            margin: 0,
            bgcolor: "black",
            backgroundImage: `linear-gradient( to bottom left,rgba(89, 0, 255, 0.17),rgba(66, 0, 153, 0.24))`,
          }}
        >
          {loading ? (
            // Display the loading spinner while data is being loaded
            <Loading />
          ) : (
            <Box>
              <Appbar />
              <HeroSection />
              <Box sx={{ position: "relative" }}>
                <OurServices />
                <OurWork />
                <div className="gradient-01" />
              </Box>
              <Box sx={{
                position: "relative",
              }}>
                <ContactUs />
                <TechStack />
                <div className="gradient-03" />
              </Box>
              <Box sx={{
                position: "relative",
              }}>
                <div className="footer-gradients" />
                <FooterSection />
              </Box>
            </Box>
          )}
        </Paper>
      </RootLayout>
    </ServerLayout>
  );
}
