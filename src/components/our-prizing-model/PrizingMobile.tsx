import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Cancel from "@mui/icons-material/Cancel";
import CheckCircle from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { packagesData } from "@/utils/data/prizingData";
import { styles } from "@/styles/styles";
import IconButton from '@mui/material/IconButton';
interface ListItemProps {
  items: {
    text: string;
    isGreen: boolean;
  }[];
}

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <IconButton size="small" sx={{ color: "white" }}>
        <ArrowForwardIosSharpIcon sx={{fontSize:"14px"}}  />
      </IconButton>

    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  padding: "0.5rem",
  border: `1px solid #dec5e333`,
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(4),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  background: "#00000055",
}));

const ListItem: React.FC<ListItemProps> = ({ items }) => (
  <Box>
    {items.map((item, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          alignItems: "center",
          margin: "0.2rem auto",
        }}
      >
        <ListItemIcon>
          {item.isGreen ? (
            <CheckCircle sx={{ color: "#1eff00" }} />
          ) : (
            <Cancel sx={{ color: "red" }} />
          )}
        </ListItemIcon>
        <ListItemText>
          <Typography variant="subtitle2" textTransform="capitalize">
            {item.text}
          </Typography>
        </ListItemText>
      </Box>
    ))}
  </Box>
);

const PrizingMobile: React.FC = () => {
  const [expanded, setExpanded] = React.useState<string | false>(
    packagesData[0]?.pricePlan || false
  );

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Box>
      {packagesData?.map((item, index) => (
        <motion.div
          variants={fadeIn("up", "spring", index * 0.5, 1)}
          key={item.pricePlan}
        >
          <Accordion
            expanded={expanded === item.pricePlan}
            onChange={handleChange(item.pricePlan)}
            sx={{
              ...styles.cardStyle,
              ...styles.borderRadius,
              overflow: "hidden",
              width: "88vw",
              my: "0.5rem",
              "& .MuiAccordion-region": { height: expanded ? "auto" : 0 },
              "& .MuiAccordionDetails-root": {
                display: expanded ? "block" : "none",
              },
            }}
          >
            <AccordionSummary
              aria-controls={`${item.pricePlan}-content`}
              id={`${item.pricePlan}-header`}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  px: "1rem",
                }}
              >
                <Typography
                  variant="h6"
                  fontWeight="lighter"
                  textTransform="capitalize"
                  color="textPrimary"
                >
                  {item.pricePlan}
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="lighter"
                  color="textPrimary"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <span style={{ fontSize: "14px", fontStyle: "italic" }}>
                    from &nbsp;
                  </span>
                  <span style={{ color: "#449DD1", fontWeight: "bold" }}>
                    R {item.priceRange}
                  </span>
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <ListItem items={item.items} />
            </AccordionDetails>
          </Accordion>
        </motion.div>
      ))}
    </Box>
  );
};

export default PrizingMobile;
