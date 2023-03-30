import React from "react";
import { Icon } from "@iconify/react";
import { Box } from "@mui/material";

// Compute size function that returns the size of the icon. Height is the same as the width.
const computeSize = (size) => {
  switch (size) {
    case "xs":
      return 16;
    case "s":
      return 18;
    default:
    case "m":
      return 20;
    case "l":
      return 22;
    case "xl":
      return 24;
    case "xxl":
      return 30;
    case "lg":
      return 50;
  }
};

const Iconify = ({ icon, size, sx, color, ...other }) => {
  const computedSize = computeSize(size);
  return (
    <Box
      component={Icon}
      height={computedSize}
      icon={icon}
      color={color}
      width={computedSize}
      sx={{ ...sx }}
      {...other}
    />
  );
};

Iconify.defaultProps = {
  size: "m",
};

export default Iconify;
