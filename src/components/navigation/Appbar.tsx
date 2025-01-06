// this component was coded by wilfred reign and is a product of gene20 incoporations
// website:  www.wilfredreign.netlify.app
// facebook: wilfred reign
// contact : +27 61 202 3165
// whatsapp: +27 61 202 3165
"use client";
// *** react/next imports ***
import React, { useState } from "react";
import Link from "next/link";

// *** MUI5 Component imports ***
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";

// *** MUI5 Icon imports ***
import MenuIcon from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";

// *** style imports ***
import { styles } from "@/styles/styles";

// *** component imports ***
import Gene20Logo from "../gene20Logo";
import GlowingButtonOutlined from "../glowingButtonOutlined";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import NavTabs from "./NavTabs";
import NavigationMenu from "./NavigationMenu";

interface Props {
  window?: () => Window;
  children?: React.ReactElement<any>;
}

interface DashBoardNavigationProps {
  window?: () => Window;
  title?: string;
  children?: React.ReactNode;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children!, {
    elevation: trigger ? 1 : 0,
    ...props,
  });
}

const Appbar: React.FC<DashBoardNavigationProps> = ({
  window,
  ...rest
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const container = window !== undefined ? () => window().document.body : undefined;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <>
      <Box>
        <Box
          position="fixed"
          sx={{
            zIndex: 99,
            width: "100%",
            p: { xs: "0.5rem", lg: "1rem 4rem" },
          }}
        >
          <ElevationScroll>
            <AppBar
              position="static"
              sx={{
                ...styles.scrolledAppBar,
                backgroundColor: trigger ? "#DEC5E308" : "transparent",
                backdropFilter: "blur(10px)",
                boxShadow: "none",
              }}
            >
              <Toolbar
                sx={{
                  ...styles.between_flex,
                  border: trigger ? "1px solid #DEC5E350" : "none",
                  borderRadius: (theme) => theme.shape.borderRadius,
                  position: "relative",
                  maxWidth: "100vw",
                  minHeight: "40px",
                  width: "100%",
                  p: "0.5rem",
                  m: 0,
                }}
              >
                <Box
                  sx={{
                    ...styles.between_flex,
                    width: "100%",
                  }}
                >
                  <Box display="flex" alignItems="center" gap={4}>
                    <IconButton
                      size="medium"
                      aria-label="open drawer"
                      onClick={handleDrawerToggle}
                      sx={{
                        ...styles.iconHover,
                        borderRadius: "10px",
                        display: { xs: "flex", sm: "none" },
                      }}
                    >
                      {!mobileOpen ? <MenuIcon /> : <Close />}
                    </IconButton>
                    <Link href="/">
                      <Gene20Logo />
                    </Link>
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "none", md: "flex" },
                      alignItems: "center",
                    }}
                  >
                    <NavTabs />
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "none", sm: "flex" },
                    }}
                  >
                    <a href="/#contact">
                      <GlowingButtonOutlined
                        variant="outlined"
                        type="button"
                        size="small"
                      >
                        contact us
                      </GlowingButtonOutlined>
                    </a>
                  </Box>
                  <Box
                    sx={{
                      display: { xs: "flex", sm: "none" },
                      alignItems: "center",
                    }}
                  >
                    <Stack gap={0.5} direction="row" alignItems="center">
                      <a href="/#contact">
                        <GlowingButtonOutlined
                          variant="outlined"
                          type="button"
                          size="small"
                        >
                          contact us
                        </GlowingButtonOutlined>
                      </a>
                    </Stack>
                  </Box>
                </Box>
              </Toolbar>
            </AppBar>
          </ElevationScroll>
        </Box>
        <Drawer
          {...rest}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "flex", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 260,
              pt: "1rem",
            },
          }}
        >
          <NavigationMenu
            open={open}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            handleDrawerToggle={handleDrawerToggle}
          />
        </Drawer>
      </Box>
    </>
  );
};

export default Appbar;
