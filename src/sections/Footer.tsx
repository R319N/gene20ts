import React from 'react'
import { motion } from "framer-motion";
import { staggerContainer } from '@/utils/motion'
import FooterComponent from '@/components/footer/FooterComponent';
const Footer = () => {
    return (
        <section
            style={{
                position: 'relative',
            }}
            id="contact"
        >
            <motion.footer
                variants={staggerContainer}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.25 }}
            >
                <div className="footer-gradient" />
                <FooterComponent />
            </motion.footer>
        </section>
    )
}

export default Footer
