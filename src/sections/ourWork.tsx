'use client'
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { styles } from "@/styles/styles";
import OurWorkComponent from "@/components/our-work/OurWorkComponent";

const OurWork = () => {
  return (
    <section
      id="portfolio"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <OurWorkComponent />
      </motion.div>
    </section>
  );
};

export default OurWork;
