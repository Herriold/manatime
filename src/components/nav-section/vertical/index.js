import { Box, List } from "@mui/material";
import React from "react";

import { NavListRoot } from "./NavList";

const NavSectionVertical = ({ navConfig, ...other }) => {
  return (
    <Box {...other} sx={{ backgroundColor: "#0090F5" }}>
      {navConfig.map((group) => {
        return (
          <List key={group.id} sx={{ px: 0, pt: 3 }}>
            {group.items.map((list) => {
              return <NavListRoot key={list.title} list={list} />;
            })}
          </List>
        );
      })}
    </Box>
  );
};

export default NavSectionVertical;
