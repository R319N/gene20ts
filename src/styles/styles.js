export const styles = {
  transparentAppBar: {
    backgroundColor: "transparent",
    backdropFilter: "blur(10px)",
  },
  outlinedText: {
    color: "#dec5e3",
    // filter: "drop-shadow(1px 1px 0 aquamarine) drop-shadow(-1px -1px 0 aqua)",
  },
  scrolledAppBar: {
    borderRadius: (theme) => theme.shape.borderRadius,
    transition: "background-color 0.3s ease-in-out", // Smooth transition
    width: "100%",
    display: "flex",
  },
  borderRadius: {
    borderRadius: "10px",
    border: "1px solid #dec5e355 ",
  },
  cardStyle: {
    borderRadius: "8px", // Add border radius for rounded corners
    backdropFilter: "blur(8px)",
    backgroundImage: `linear-gradient(45deg, #449DD110 0%, #9A48D010 100%)`, // Adjust transparency as needed
  },
  center_flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  between_flex: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  column_flex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  gradient: {
    backgroundImage: `linear-gradient(270deg,
        hsl(295deg 76% 51%) 0%,
        hsl(284deg 70% 73%) 26%,
        hsl(257deg 70% 86%) 39%,
        hsl(202deg 92% 90%) 50%,
        hsl(215deg 77% 81%) 61%,
        hsl(221deg 73% 70%) 74%,
        hsl(220deg 76% 51%) 100%);
    filter: blur(125px)`,
    zIndex: 0,
    position: "absolute",
  },

  landingPage: {
    position: "relative",
    backgroundImage: "url('/bg.jpg')",
    backgroundSize: "cover" /* Adjust as needed */,
    backgroundPosition: "center" /* Adjust as needed */,
    height: "100vh",
  },

  overlayStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `linear-gradient(45deg, #449DD180 0%, #9A48D080 100%)`,
    zIndex: 1,
  },
  contactBarWrap: {
    backdropFilter: "blur(10px)",
    background: (theme) => theme.palette.background.card,
    borderRadius: (theme) => theme.shape.borderRadius,
    px: "1rem",
    boxShadow: `0 0 10px ${({ theme }) => theme.palette.secondary.main}`,
  },

  landingPageContent: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "2",
  },
  Content: {
    position: "relative",
    zIndex: 2,
    color: "white",
    textAlign: "center",
    top: "50%",
    transform: "translateY(-50%)",
  },
  contactPage: {
    backgroundImage: `url('/contact_us.jpg')`,
    backgroundSize: "cover" /* Adjust as needed */,
    backgroundPosition: "center" /* Adjust as needed */,
    height: "100%",
  },
  fontSize: {
    xs: (theme) => theme.typography.pxToRem(12), // Example for small screens
    md: (theme) => theme.typography.pxToRem(33), // Example for medium screens
  },
  scale: {
    "&:hover": {
      transform: "scale(2)",
    },
  },
  iconHover: {
    "&:hover": {
      // backgroundColor: (theme) => theme.palette.primary.dark,
      boxShadow: (theme) => `0 0 10px ${theme.palette.primary.main}`,
      border: (theme) => `1px solid ${theme.palette.primary.main} `,
      color: (theme) => theme.palette.text.primary,
      opacity: "0.8",
    },
  },
};