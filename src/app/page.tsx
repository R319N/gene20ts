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

// export const metadata = {
//   title: "Gene 20 - Home",
// };
export default function Home() {
  return (
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
  );
}
