import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Cancel from "@mui/icons-material/Cancel";
import CheckCircle from "@mui/icons-material/CheckCircle";

import { styles } from "@/styles/styles";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { packagesData } from "@/utils/data/prizingData";

interface PrizingMobileProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "0.9rem", color: (theme) => theme.palette.text.main }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  // flexDirection: "row-reverse",
  padding: "0.5rem",
  border: `1px solid ${theme.palette.borderColor}`,

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

const ListItem = ({ items }) => (
  <Box>
    {items.map((item, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          m: "0.2rem auto",
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

const PricePlanCardMobile: React.FC<PrizingMobileProps> = ({ handleChange }) => {
  const [expanded, setExpanded] = React.useState("basic plan");

  // const handleChange = (panel) => (event, newExpanded) => {
  //   setExpanded(newExpanded ? panel : false);
  // };

  return (
    <div>
      {packagesData.map((item: PackageDataItem, index) => (
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
              aria-controls={`${item.pricePlan}d-content`}
              id={`${item.pricePlan}d-header`}
            >
              <Box sx={{ ...styles.between_flex, width: "100%", px: "1rem" }}>
                <Typography
                  variant="h6"
                  fontWeight="lighter"
                  textTransform="capitalize"
                >
                  {item.pricePlan}
                </Typography>
                <Typography
                  variant="h6"
                  textAlign="left"
                  fontWeight="lighter"
                  sx={{ ...styles.center_flex }}
                >
                  <span style={{ fontSize: "14px", fontStyle: "italic" }}>
                    from &nbsp;
                  </span>
                  <span style={{ color: "#449DD1", fontWeight: "bold" }}>
                    {item.priceRange}
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
    </div>
  );
}
// export default PricePlanCardMobile;
// import React from "react";
// import { styled } from "@mui/material/styles";
// import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
// import MuiAccordion from "@mui/material/Accordion";
// import MuiAccordionSummary from "@mui/material/AccordionSummary";
// import MuiAccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import Cancel from "@mui/icons-material/Cancel";
// import CheckCircle from "@mui/icons-material/CheckCircle";
// import { motion } from "framer-motion";
// import { fadeIn } from "@/utils/motion";
// import { packagesData } from "@/utils/data/prizingData";

// interface ListItemProps {
//   items: {
//     text: string;
//     isGreen: boolean;
//   }[];
// }

// interface PackageDataItem {
//   pricePlan: string;
//   priceRange: string;
//   items: {
//     text: string;
//     isGreen: boolean;
//   }[];
// }

// interface PricePlanCardMobileProps {
//   handleChange: (
//     panel: string
//   ) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => void;
// }

// const Accordion = styled(MuiAccordion)(({ theme }) => ({
//   "&:not(:last-child)": {
//     borderBottom: 0,
//   },
//   "&::before": {
//     display: "none",
//   },
// }));

// const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
//   backgroundColor:
//     theme.palette.mode === "dark"
//       ? "rgba(255, 255, 255, .05)"
//       : "rgba(0, 0, 0, .03)",
//   padding: "0.5rem",
//   border: `1px solid ${theme.palette.divider}`,
//   "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
//     transform: "rotate(90deg)",
//   },
//   "& .MuiAccordionSummary-content": {
//     marginLeft: theme.spacing(1),
//   },
// }));

// const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
//   padding: theme.spacing(4),
//   borderTop: `1px solid ${theme.palette.divider}`,
//   background: "#00000055",
// }));

// const ListItem: React.FC<ListItemProps> = ({ items }) => (
//   <Box>
//     {items.map((item, index) => (
//       <Box
//         key={index}
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           margin: "0.2rem auto",
//         }}
//       >
//         <ListItemIcon>
//           {item.isGreen ? (
//             <CheckCircle sx={{ color: "#1eff00" }} />
//           ) : (
//             <Cancel sx={{ color: "red" }} />
//           )}
//         </ListItemIcon>
//         <ListItemText>
//           <Typography variant="subtitle2" textTransform="capitalize">
//             {item.text}
//           </Typography>
//         </ListItemText>
//       </Box>
//     ))}
//   </Box>
// );

// const PricePlanCardMobile: React.FC<PricePlanCardMobileProps> = ({
//   handleChange,
// }) => {
//   const [expanded, setExpanded] = React.useState<string | false>("basic plan");

//   const onAccordionChange =
//     (panel: string) =>
//     (_event: React.ChangeEvent<{}>, newExpanded: boolean) => {
//       setExpanded(newExpanded ? panel : false);
//     };

//   return (
//     <div>
//       {packagesData.map((item: PackageDataItem, index) => (
//         <motion.div
//           variants={fadeIn("up", "spring", index * 0.5, 1)}
//           key={item.pricePlan}
//         >
//           <Accordion
//             expanded={expanded === item.pricePlan}
//             onChange={onAccordionChange(item.pricePlan)}
//             sx={{
//               overflow: "hidden",
//               width: "88vw",
//               my: "0.5rem",
//               borderRadius: 2,
//               border: 1,
//               borderColor: "divider",
//             }}
//           >
//             <AccordionSummary
//               aria-controls={`${item.pricePlan}-content`}
//               id={`${item.pricePlan}-header`}
//             >
//               <Box
//                 sx={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   width: "100%",
//                   px: "1rem",
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   fontWeight="lighter"
//                   textTransform="capitalize"
//                 >
//                   {item.pricePlan}
//                 </Typography>
//                 <Typography
//                   variant="h6"
//                   fontWeight="lighter"
//                   sx={{ display: "flex", alignItems: "center" }}
//                 >
//                   <span style={{ fontSize: "14px", fontStyle: "italic" }}>
//                     from &nbsp;
//                   </span>
//                   <span style={{ color: "#449DD1", fontWeight: "bold" }}>
//                     {item.priceRange}
//                   </span>
//                 </Typography>
//               </Box>
//             </AccordionSummary>
//             <AccordionDetails>
//               <ListItem items={item.items} />
//             </AccordionDetails>
//           </Accordion>
//         </motion.div>
//       ))}
//     </div>
//   );
// };

export default PricePlanCardMobile;
