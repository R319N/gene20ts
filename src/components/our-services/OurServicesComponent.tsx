"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HeaderBanner from "../headerBanner";
import HeadingText from "../headerBanner";
// import ourServices from "@/utils/data/our_servicesData";

import styles from "./MyCarousel.module.css";
import Image from "next/image";
import ourServices from "@/utils/data/our_services-data";
import { TitleText } from "../CustomTexts";
// import { TitleText } from "../CustomTexts";
// import Image from "next/image";

interface ArrowProps {
    onClick?: () => void; // Make onClick optional since react-slick will assign it automatically
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
        <Box
            className={styles.nextArrow}
            onClick={onClick}
            sx={{
                background: "#00000055",
                padding: "0.2rem",
                borderRadius: "50%",
                height: "2rem",
                width: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                    background: "#000000",
                },
            }}
        >
            <ArrowForwardIosIcon
                sx={{
                    fontSize: "1.5rem",
                    fontWeight: "bolder",
                    color: "#dec5e3",
                }}
            />
        </Box>
    );
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
    return (
        <Box
            className={styles.prevArrow}
            onClick={onClick}
            sx={{
                background: "#00000055",
                paddingLeft: "0.55rem",
                borderRadius: "50%",
                height: "2rem",
                width: "2rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <ArrowBackIosIcon sx={{ fontSize: "1.5rem", color: "#dec5e3" }} />
        </Box>
    );
};
const OurServicesComponent = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const header = <TitleText title="our services" />;
    const subHeader =
        "We also offer graphic design, web design, branding, content creation, social media management, SEO optimization, and digital marketing to enhance your brand's online presence.";
    const settings = {
        centerMode: true,
        centerPadding: "10%",
        autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        beforeChange: (current: number, next: number) => setActiveSlide(next),
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: "30px",
                },
            },
            {
                breakpoint: 912,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerPadding: "1rem",
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "15%",
                },
            },
        ],
    };

    useEffect(() => {
        // Ensure the initial center slide is styled
        document.querySelectorAll(".slick-slide").forEach((slide, index) => {
            if (index === 2) {
                slide.classList.add("center-slide");
            }
        });
    }, []);


    return (
        <Box
            sx={{
                width: "100%",
                pt: "5rem",
                px: 0
            }}
        >
            <HeadingText
                header={header}
                subHeader={subHeader}
            />
            <Box
                sx={{
                    px: { xs: "1rem", lg: 0 },
                    my: "2rem",
                }}
            >
                <Slider {...settings}>
                    {ourServices.map((service, index) => (
                        <Box
                            key={index}
                            className={`${styles.cardWrapper} ${activeSlide === index ? styles.activeCard : ""}`}
                        >
                            <Box
                                className={styles.card}
                            >
                                <Box className={styles.cardContent}>
                                    <Box height="25vh">
                                        <Image
                                            src={service.imgURL}
                                            alt={`${service.name}`}
                                            width={300}
                                            height={200}
                                            style={{
                                                width: "100%",
                                                height: "80%",
                                                objectFit: "cover",
                                                zIndex: "1",
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                bgcolor: "#00000099",
                                                height: "80%",
                                                width: "100%",
                                                zIndex: "2",
                                                top: "0",
                                            }}
                                        />
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            margin: "auto",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            position: "absolute",
                                            top: "80%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)",
                                            zIndex: "3",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                backgroundImage:
                                                    "linear-gradient(45deg, #449DD130 0%, #9A48D030 100%)",
                                                minWidth: "10vw",
                                                width: "100%",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "center",
                                                p: "1rem",
                                                backdropFilter: "blur(10px)",
                                                borderRadius: "10px",
                                                border: "1px solid #dec5e315",
                                                textRendering: "optimizeLegibility",
                                                "-webkit-font-smoothing": "antialiased",
                                                "-moz-osx-font-smoothing": "grayscale",
                                            }}
                                        >
                                            <>{service.icon}</>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    textTransform: "capitalize",
                                                    fontWeight: "lighter",
                                                    textAlign: "center",
                                                    fontSmooth: "always",
                                                }}
                                            >
                                                <Box
                                                    component="span"
                                                    sx={{ color: "#dec5e3", my: "0.5rem" }}
                                                >
                                                    {service.name.split(" ")[0]}
                                                </Box>
                                                <Box
                                                    component="span"
                                                    sx={{ color: "#449DD1", display: "block" }}
                                                >
                                                    {service.name.split(" ").slice(1).join(" ")}
                                                </Box>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className={styles.cardBackdrop} />
                            </Box>
                        </Box>
                    ))}
                </Slider>
            </Box>
        </Box>
    )
}

export default OurServicesComponent
