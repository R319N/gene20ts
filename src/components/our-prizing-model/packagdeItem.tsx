import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { styles } from "@/styles/styles";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";

// Define types for props
interface ListItemProps {
  items: {
    text: string;
    isGreen: boolean;
  }[];
}

interface PackadgeItemProps {
  offer: {
    pricePlan: string;
    recommendation: string;
    priceRange: number | string;
    items: {
      text: string;
      isGreen: boolean;
    }[];
  };
  index: number;
  isCenter: boolean
}

// ListItem Component
const ListItem: React.FC<ListItemProps> = ({ items }) => (
  <Box>
    {items.map((item, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          margin: "0.2rem auto",
        }}
      >
        <ListItemIcon>
          {item.isGreen ? (
            <CheckCircleIcon sx={{ color: "#1eff00" }} />
          ) : (
            <CancelIcon sx={{ color: "red" }} />
          )}
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body2" textTransform="capitalize">
            {item.text}
          </Typography>
        </ListItemText>
      </Box>
    ))}
  </Box>
);

// PackadgeItem Component
const PackadgeItem: React.FC<PackadgeItemProps> = ({ offer, index }) => {
  const { pricePlan, recommendation, priceRange, items } = offer;

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)}>
      <Box sx={{ ...styles.center_flex, my: "1rem", width: "100%" }}>
        <Box
          width="100%"
          sx={{
            ...styles.between_flex,
            flexDirection: "column",
            height: "100%",
            position: "relative",
            overflow: "visible",
            transition: "transform 0.3s, box-shadow 0.3s",

            "&::before": {
              ...styles.borderRadius,
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `linear-gradient(45deg, #449DD120 0%, #9A48D020 40%)`,
              backdropFilter: "blur(10px)",
              zIndex: -1,
              transition: "background-image 0.3s, backdrop-filter 0.3s",
            },
            "&:hover::before": {
              backgroundImage: `linear-gradient(45deg, #449DD140 0%, #9A48D040 40%)`,
              boxShadow: "0 8px 16px #449DD150",
              borderColor: "primary.main",
              borderWidth: "1px",
              borderStyle: "solid",
            },
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          <Box
            sx={{
              ...styles.center_flex,
              flexDirection: "column",
              mt: "2rem",
            }}
            gap={1}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: (theme) => theme.typography.fontWeightRegular,
                textTransform: "capitalize",
              }}
            >
              {pricePlan}
            </Typography>
            <Box sx={{ ...styles.center_flex }} gap={1}>
              <Typography
                variant="body1"
                fontStyle="italic"
                color="textPrimary"
              >
                from
              </Typography>
              <Typography
                variant="h4"
                fontWeight={(theme) => theme.typography.fontWeightMedium}
                color="primary"
              >
                {priceRange}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              ...styles.center_flex,
              flexDirection: "column",
              width: "100%",
              height: "100%",
            }}
          >
            <List sx={{ width: "100%", p: "1.5rem 2rem" }}>
              <ListItem items={offer.items} />
            </List>

            <Stack
              direction="row"
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: "1rem",
              }}
              gap={2}
            >
              <InfoIcon color="primary" />
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  textAlign: "left",
                  textTransform: "capitalize",
                  // color: "#5C6584",
                }}
              >
                {recommendation}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default PackadgeItem;
