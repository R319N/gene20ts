import React from "react";
import RotatingCard from "../RotatingCard/RotatingCard";
import { IconButton } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
interface WhatsAppProps {
  phoneNumber: number
}
const WhatsAppButton: React.FC<WhatsAppProps> = ({ phoneNumber }) => {
  return (
    <RotatingCard>
      <IconButton
        href={`https://wa.me/${phoneNumber}?text=Hie%20shoe%20freaks%20`}
      >
        <WhatsApp sx={{ fontSize: "20px", color: "green" }} />
      </IconButton>
    </RotatingCard>
  );
};


export default WhatsAppButton;
