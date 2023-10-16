import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import App from "../router";
import { lightTheme } from "./lightTheme";
import { darkTheme } from "./darkTheme";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function MainTheme() {
  const [mode, setMode] = useState(lightTheme);
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((mode) => (mode === lightTheme ? darkTheme : lightTheme));
      },
    }),
    []
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mode}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
