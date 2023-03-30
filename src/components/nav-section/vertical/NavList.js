import { Collapse, List } from "@mui/material";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { NavItemRoot, NavItemSub } from "./NavItem";
import { getActive } from "..";

const NavListRoot = ({ isCollapse, list }) => {
  const { pathname } = useLocation();

  const active = getActive(list.path, pathname);

  const [open, setOpen] = useState(active);

  const hasChildren = list.children;

  if (hasChildren) {
    return (
      <>
        <NavItemRoot
          active={active}
          item={list}
          onOpen={() => setOpen(!open)}
          open={open}
        />

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {(list.children || []).map((item) => (
              <NavListSub key={item.title} list={item} />
            ))}
          </List>
        </Collapse>
      </>
    );
  }

  return <NavItemRoot active={active} isCollapse={isCollapse} item={list} />;
};

const NavListSub = ({ list }) => {
  const { pathname } = useLocation();

  const active = getActive(list.path, pathname);

  const [open, setOpen] = useState(active);

  const hasChildren = list.children;

  if (hasChildren) {
    return (
      <>
        <NavItemSub
          active={active}
          item={list}
          onOpen={() => setOpen(!open)}
          open={open}
        />

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ pl: 3 }}>
            {(list.children || []).map((item) => (
              <NavItemSub
                key={item.title}
                active={getActive(item.path, pathname)}
                item={item}
              />
            ))}
          </List>
        </Collapse>
      </>
    );
  }

  return <NavItemSub active={active} item={list} />;
};

// eslint-disable-next-line import/prefer-default-export
export { NavListRoot };
