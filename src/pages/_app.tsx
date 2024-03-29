import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { darkTheme, materialDark } from "../../themes";
import { ThemeProvider } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <ThemeProvider theme={materialDark}>
        <Component {...pageProps} />
      </ThemeProvider>
    </NextUIProvider>
  );
}
