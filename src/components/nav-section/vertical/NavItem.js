import { Link, ListItemText } from "@mui/material";
import React from "react";
import { NavLink as RouterLink } from "react-router-dom";

import Iconify from "../../Iconify";
import { ListItemIconStyle, ListItemStyle, ListItemTextStyle } from "./style";
import { isExternalLink } from "..";

const NavItemRoot = ({ active, item, onOpen, open = false }) => {
  const { children, icon, info, path, title } = item;

  const renderContent = (
    <>
      {icon && <ListItemIconStyle>{icon}</ListItemIconStyle>}
      <ListItemTextStyle disableTypography primary={title} />
      {info && info}
      {children && <ArrowIcon open={open} />}
    </>
  );

  if (children) {
    return (
      <ListItemStyle
        activeRoot={active}
        onClick={onOpen}
        sx={{
          background: !open ? "rgb(9, 70, 148)" : "initial",
          borderRadius: "initial",
          height: 50,
          marginBottom: "2px",
        }}
      >
        {renderContent}
      </ListItemStyle>
    );
  }

  return isExternalLink(path) ? (
    // cspell-checker: disable-next-line
    <ListItemStyle component={Link} href={path} rel="noopener" target="_blank">
      {renderContent}
    </ListItemStyle>
  ) : (
    <ListItemStyle activeRoot={active} component={RouterLink} to={path}>
      {renderContent}
    </ListItemStyle>
  );
};

const NavItemSub = ({ active = false, item, onOpen, open = false }) => {
  const { children, info, path, title } = item;

  const renderContent = (
    <>
      <ListItemText
        disableTypography
        primary={title}
        sx={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      />
      {info && info}
      {children && <ArrowIcon open={open} />}
    </>
  );

  if (children) {
    return (
      <ListItemStyle activeSub={active} onClick={onOpen} subItem>
        {renderContent}
      </ListItemStyle>
    );
  }

  return isExternalLink(path) ? (
    // cspell-checker: disable-next-line
    <ListItemStyle
      component={Link}
      href={path}
      rel="noopener"
      subItem
      target="_blank"
    >
      {renderContent}
    </ListItemStyle>
  ) : (
    <ListItemStyle activeSub={active} component={RouterLink} subItem to={path}>
      {renderContent}
    </ListItemStyle>
  );
};

const ArrowIcon = ({ open }) => (
  <Iconify
    icon={open ? "eva:arrow-ios-downward-fill" : "eva:arrow-ios-upward-fill"}
    size="l"
    sx={{ ml: 1, color: "#FFFFFF" }}
  />
);

export { ArrowIcon, NavItemSub, NavItemRoot };
