import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import React from "react";
import { styles } from "@/styles/styles";
import { IconButton } from "@mui/material";
import FbIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import XIcon from '@mui/icons-material/X'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const contactIcons = [
  {
    name: "facebook",
    icon: <FbIcon />,
    link: "www.facebook.com"
  },
  {
    name: "instagram",
    icon: <InstagramIcon />,
    link: "www.facebook.com"
  },
  {
    name: "x",
    icon: <XIcon />,
    link: "www.facebook.com"
  },
  {
    name: "LinkedIn",
    icon: <LinkedInIcon />,
    link: "www.facebook.com"
  }
]

const ContactBar = () => {
  return (
    <Box>
      <Stack gap={1} direction="row" p="0.5rem">
        {
          contactIcons.map((item, index) => (
            <IconButton
              key={index}
              sx={{ ...styles.iconHover, height: "40px", width: "40px", borderRadius: "20px" }}
              href={item.link}
            >
              {item.icon}
            </IconButton>

          ))
        }
      </Stack>
    </Box>
  );
};

export default ContactBar;
