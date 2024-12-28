import React from "react";
import Toolbar from "@mui/material/Toolbar";
import DashBoardDrawer from "./NavigationDrawer";
import Box from "@mui/material/Box";
import SocialContacts from "../contact/socialContact";
import NavigationDrawer from "./NavigationDrawer";
import navigation from "@/utils/data/navigation_Links";

interface NavigationMenuProps {
  open: boolean;
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  handleDrawerToggle: () => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  handleDrawerToggle,
}) => {
  const tabItems = navigation.filter((item) => item.isTab);
  return (
    <Box
      sx={{
        display: "flex-row",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Toolbar />
      <Box minHeight="50vh" height="100%">
        {tabItems.map((item, index) => (
          <NavigationDrawer
            item={item}
            key={index}
            handleDrawerToggle={handleDrawerToggle}
          />
        ))}
      </Box>
      <Toolbar>
        <SocialContacts />
      </Toolbar>
    </Box>
  );
};

export default NavigationMenu;
