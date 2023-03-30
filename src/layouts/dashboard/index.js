import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Scrollbar from "src/components/Scrollbar";
import { HEADER } from "src/utils/config";
import cssStyles from "src/utils/cssStyles";

import DashboardHeader from "./header";
import CategoryHamburger from "./header/hamburger";
import NavbarVertical from "./navbar/NavbarVertical";

const MainStyle = styled("main")(({ theme }) => ({
  flexGrow: 1,
  paddingBottom: HEADER.MOBILE_HEIGHT,
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: HEADER.MOBILE_HEIGHT + 24,
  [theme.breakpoints.up("lg")]: {
    paddingBottom: HEADER.DASHBOARD_DESKTOP_HEIGHT,
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: HEADER.DASHBOARD_DESKTOP_HEIGHT + 16,
    transition: theme.transitions.create("margin-left", {
      duration: theme.transitions.duration.shorter,
    }),
  },
}));

const DashboardLayout = () => {
  const [open, setOpen] = useState(false);
  const [hambOpen, hambSetOpen] = useState(false);

  return (
    <Box
      sx={{
        display: { lg: "flex" },
        minHeight: { lg: 1, md: "100%" },
      }}
    >
      <DashboardHeader
        sx={(theme) =>
          hambOpen && {
            ...cssStyles(theme).bgBlur({
              color: theme.palette.background.paper,
              opacity: 0.92,
              blur: 3,
            }),
          }
        }
      />
      <NavbarVertical
        isOpenSidebar={open}
        onCloseSidebar={() => setOpen(false)}
        onHambClick={() => hambSetOpen(!hambOpen)}
      />
      {hambOpen && (
        <CategoryHamburger
          isOpen={hambOpen}
          handleHambOpen={() => hambSetOpen(!hambOpen)}
        />
      )}
      <Scrollbar sx={{ height: "100vh", backgroundColor: "#E3E3E3" }}>
        <MainStyle
          sx={(theme) =>
            hambOpen && {
              ...cssStyles(theme).bgBlur({
                color: theme.palette.background.paper,
                opacity: 0.92,
                blur: 3,
              }),
            }
          }
        >
          <Outlet />
        </MainStyle>
      </Scrollbar>
    </Box>
  );
};

export default DashboardLayout;
