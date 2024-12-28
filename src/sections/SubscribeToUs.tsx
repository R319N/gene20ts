'use client'
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import SubscribeComponent from "@/components/SubscribeToUs/SubscribeComponent";

const SubscribeToUs = () => {
    return (
        <section style={{ position: "relative", zIndex: 10 }} id="subscribe">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                style={{ margin: "auto", flexDirection: "column" }}
            >
                <SubscribeComponent />
            </motion.div >
        </section >
    )
}

export default SubscribeToUs
