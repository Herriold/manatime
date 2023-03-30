import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { ICON, NAVBAR } from "src/utils/config";

const ListItemStyle = styled(ListItemButton, {
  shouldForwardProp: (prop) =>
    prop !== "activeRoot" && prop !== "activeSub" && prop !== "subItem",
})(({ activeRoot, activeSub, subItem, theme }) => ({
  ...theme.typography.body2,
  borderRadius: theme.shape.borderRadius / 2,
  color: "#FFFFFF",
  height: NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT,
  marginBottom: theme.spacing(0.5),
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(1.5),
  position: "relative",
  textTransform: "capitalize",
  // activeRoot
  ...(activeRoot && {
    ...theme.typography.subtitle2,
    backgroundColor: alpha(
      theme.palette.primary.main,
      theme.palette.action.selectedOpacity
    ),
    color: theme.palette.primary.main,
  }),
  // activeSub
  ...(activeSub && {
    ...theme.typography.subtitle2,
    color: theme.palette.text.primary,
  }),
  // subItem
  ...(subItem && {
    height: NAVBAR.DASHBOARD_ITEM_SUB_HEIGHT,
  }),
}));

const ListItemTextStyle = styled(ListItemText, {
  shouldForwardProp: (prop) => prop !== "isCollapse",
})(({ isCollapse, theme }) => ({
  transition: theme.transitions.create(["width", "opacity"], {
    duration: theme.transitions.duration.shorter,
  }),
  whiteSpace: "nowrap",
  ...(isCollapse && {
    opacity: 0,
    width: 0,
  }),
}));

const ListItemIconStyle = styled(ListItemIcon, {
  shouldForwardProp: (prop) => prop !== "isCollapse",
})(({ isCollapse }) => ({
  "& svg": { height: "100%", width: "100%" },
  alignItems: "center",
  display: "flex",
  height: ICON.NAVBAR_ITEM,
  justifyContent: "center",
  width: ICON.NAVBAR_ITEM,
  minWidth: 45,
  ...(isCollapse && {
    minWidth: 0,
  }),
}));

export { ListItemStyle, ListItemTextStyle, ListItemIconStyle };
