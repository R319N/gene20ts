'use client'
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import OurServicesComponent from "@/components/our-services/OurServicesComponent";
import Container from '@mui/material/Container';
const OurServices = () => {
  return (
    <section id="services">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <OurServicesComponent />
      </motion.div>
    </section>
  );
};

export default OurServices;
