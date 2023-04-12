import { createTheme } from "@mui/material";

export const materialDark = createTheme({
    palette: {
      mode: "dark", // Establece el modo oscuro
      // Establece los colores de Material UI para el modo oscuro
      primary: {
        main: "#ffff",
      },
      background: {
        paper: "ffff",
        default: "ffff",
      },
      text: {
        primary: "ffff",
        secondary: "ffff",
      },
    },
  });