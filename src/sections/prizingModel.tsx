'use client'
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { styles } from "@/styles/styles";
import OurPrizingModelComponent from "@/components/our-prizing-model/OurPrizingModelComponent";

const PrizingModel = () => {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 10,
        ...styles.center_flex,
        width: "100%",
        flexDirection: "column",
      }}
      id="prizing"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <OurPrizingModelComponent />
      </motion.div>
    </section>
  );
};

export default PrizingModel;
