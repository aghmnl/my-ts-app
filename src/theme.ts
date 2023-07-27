import { createTheme } from "@mui/material/styles";
import { indigo, emerald } from "./palette";

export const rootElement = document.getElementById("root");

// Declaring custom colors for Material UI
export const theme = createTheme({
  palette: {
    emerald: {
      main: emerald[700], // Tailwind Emerald 700
      light: emerald[400], // Tailwind Emerald 400
      dark: emerald[900], // Tailwind Emerald 900
      contrastText: emerald[200], // Tailwind Emerald 200
    },
    indigo: {
      main: indigo[700], // Tailwind Indigo 700
      light: indigo[400], // Tailwind Indigo 400
      dark: indigo[900], // Tailwind Indigo 900
      contrastText: indigo[200], // Tailwind Indigo 200
    },
  },
});

// for color references use https://tailwindcss.com/docs/customizing-colors
