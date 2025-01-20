"use client"
import RootLayout from "./layout";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import Appbar from '@/components/navigation/Appbar'
import Presentation from "@/components/Presentation/Presentation";
import OurServices from "@/sections/ourServices";
import PrizingModel from "@/sections/prizingModel";
import OurWork from "@/sections/ourWork";
import Testimonials from "@/sections/testimonials";
import ContactUs from "@/sections/contact_us";
import TechStack from "@/sections/techStack";
import ParticlesComponent from "@/components/particles";
import Footer from "@/sections/Footer";
import SubscribeToUs from "@/sections/SubscribeToUs";
import Typography from '@mui/material/Typography';
import ServerLayout from "./serverLayout";
import WhatsAppButton from "@/components/contact/whatsAppButton";
import IconButton from '@mui/material/IconButton';
import ContactButton from "@/components/contact/ContactButton";
import zIndex from "@mui/material/styles/zIndex";
export default function Home() {
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
          }}
        >
          <Appbar />
          <Box>
            <Box sx-={{ position: "fixed", bottom: "4rem", right: "2rem", zIndex: 99 }}>
              <ContactButton />
            </Box>
          </Box>

          <Presentation />
          <Box sx={{ position: "relative", overflow: "hidden" }}>
            <ParticlesComponent />
          </Box>

          <Box
            sx={{
              px: { xs: "0", lg: "16%" },
              m: 0,
              width: "100%",
              my: "2rem",
            }}
          >
            <Box sx={{ position: "relative" }}>

              <div className="gradient-03" />
              <OurServices />
              <PrizingModel />
            </Box>
            <Box sx={{ position: "relative" }}>
              <OurWork />
              <Testimonials />
              <div className="gradient-01" />
            </Box>
            <Box sx={{ position: "relative" }}>
              <ContactUs />
              <TechStack />

              <div className="gradient-04" />
            </Box>
          </Box>
          <Box sx={{
            position: "relative", background: "#1E212Bcc",
            backdropFilter: "blur(10px)",
          }}>
            <div className="feedback-gradient" />
            <SubscribeToUs />

            <Footer />
          </Box>

        </Paper>
      </RootLayout>
    </ServerLayout>
  );
}
