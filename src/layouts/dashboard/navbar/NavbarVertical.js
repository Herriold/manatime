import { Box, Drawer, IconButton, Stack, Typography } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Iconify from "src/components/Iconify";
import { NavSectionVertical } from "src/components/nav-section";
import Scrollbar from "src/components/Scrollbar";
import { NAVBAR } from "src/utils/config";

import useNavConfig from "./useNavConfig";

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    transition: theme.transitions.create("width", {
      duration: theme.transitions.duration.shorter,
    }),
  },
}));

const NavbarVertical = ({ isOpenSidebar, onCloseSidebar, onHambClick }) => {
  const theme = useTheme();
  const navConfig = useNavConfig();

  const { pathname } = useLocation();

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        "& .simplebar-content": {
          display: "flex",
          flexDirection: "column",
          height: 1,
        },
        height: 1,
      }}
    >
      <Stack
        spacing={3}
        sx={{
          flexShrink: 0,
          pb: 1,
          pt: 1,
          px: 3,
          bgcolor: "#FFFFFF",
        }}
      >
        <Stack alignItems="center" direction="row" justifyContent="center">
          <IconButton onClick={() => onHambClick && onHambClick()}>
            <Iconify icon="fluent:grid-dots-28-regular" size="xxl" />
          </IconButton>
        </Stack>
      </Stack>

      <NavSectionVertical navConfig={navConfig} />

      <Box sx={{ flexGrow: 1 }} />

      <Stack spacing={1} sx={{ mb: 2 }}>
        <Typography align="center" color="#FFFFFF" noWrap variant="caption">
          Fait avec ❤️ by<strong> Herrio</strong>
        </Typography>
      </Stack>
    </Scrollbar>
  );

  return (
    <RootStyle
      sx={{
        width: {
          lg: NAVBAR.DASHBOARD_WIDTH,
        },
      }}
    >
      <Drawer
        open
        PaperProps={{
          sx: {
            bgcolor: "#0090F5",
            borderRightStyle: "none",
            transition: (th) =>
              theme.transitions.create("width", {
                duration: th.transitions.duration.standard,
              }),
            width: NAVBAR.DASHBOARD_WIDTH,
          },
        }}
        variant="persistent"
      >
        {renderContent}
      </Drawer>
    </RootStyle>
  );
};

export default NavbarVertical;
