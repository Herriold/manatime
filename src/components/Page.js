import { Box } from "@mui/material";
import React from "react";
import { Helmet } from "react-helmet-async";
import { forwardRef } from "react";

const Page = forwardRef(({ children, title = "", meta, ...other }, ref) => (
  <>
    <Helmet>
      <title>{`${title} | Manatime 1.0`}</title>
      {meta}
    </Helmet>

    <Box ref={ref} {...other}>
      {children}
    </Box>
  </>
));

export default Page;
