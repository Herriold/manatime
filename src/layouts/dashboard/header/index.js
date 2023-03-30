import {
  AppBar,
  Box,
  Divider,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import BreadCrumbBase from "src/components/BreadCrumbBase";
import Image from "src/components/Image";
import { HEADER, NAVBAR } from "src/utils/config";

const RootStyle = styled(AppBar)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
  boxShadow: "none",
  height: HEADER.MOBILE_HEIGHT,
  transition: theme.transitions.create(["width", "height"], {
    duration: theme.transitions.duration.shorter,
  }),
  zIndex: theme.zIndex.appBar + 1,
  [theme.breakpoints.up("lg")]: {
    height: 62,
    width: `calc(100% - ${NAVBAR.DASHBOARD_WIDTH}px)`,
  },
}));

const DashboardHeader = ({ ...others }) => {
  return (
    <RootStyle {...others}>
      <Toolbar
        sx={{
          minHeight: "100% !important",
          px: { lg: 4 },
        }}
      >
        <BreadCrumbBase />

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
          justifyContent="space-between"
          width={350}
        >
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: 100,
            }}
          >
            <Image
              src="./assets/Settings.svg"
              alt="Settings"
              sx={{ width: 40, height: 40 }}
            />
            <Image
              src="./assets/Help.svg"
              alt="Help"
              sx={{ width: 40, height: 40 }}
            />
          </Stack>
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderWidth: 1, borderColor: "rgba(145, 158, 171, 0.45)" }}
          />
          <Stack
            sx={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: 200,
            }}
          >
            <Stack
              sx={{
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography color="#000">Nom et Prénom</Typography>
              <Typography variant="subtitle1" color="#adadad" fontSize="0.8rem">
                Entreprise
              </Typography>
            </Stack>
            <Image
              src="./assets/Photo.png"
              alt="photo"
              sx={{ width: 40, height: 40 }}
            />
          </Stack>
        </Stack>
      </Toolbar>
    </RootStyle>
  );
};

export default DashboardHeader;
