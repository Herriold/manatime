import { Box } from "@mui/material";
import React from "react";

const SvgIconStyle = ({ src, sx, component = "span" }) => (
  <Box
    component={component}
    sx={{
      WebkitMask: `url(${src}) no-repeat center / contain`,
      bgcolor: "currentColor",
      display: "inline-block",
      height: 24,
      mask: `url(${src}) no-repeat center / contain`,
      width: 24,
      ...sx,
    }}
  />
);

export default SvgIconStyle;
