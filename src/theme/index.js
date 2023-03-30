import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  StyledEngineProvider,
  createTheme,
  useTheme,
} from "@mui/material/styles";
import React, { useMemo } from "react";

import breakpoints from "./breakpoints";
import palette from "./palette";
import typography from "./typography";

const ThemeProvider = ({ children }) => {
  const defaultTheme = useTheme();

  const themeOptions = useMemo(
    () => ({
      breakpoints,
      shape: { borderRadius: 16, borderRadiusLarge: 32 },
      typography,
      palette: palette.light,
      customShadows: {
        ...defaultTheme.customShadows,
        primary: `rgba(100, 100, 111, 0.2) 0px 7px 29px 0px`,
        secondary: `0px 19px 43px rgba(0, 0, 0, 0.05);`,
      },
    }),
    [defaultTheme]
  );

  const theme = createTheme(themeOptions);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;
