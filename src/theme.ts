import { createTheme } from "@mui/material/styles";

//This is to allow Material UI have custom colors
declare module "@mui/material/styles/createPalette" {
  interface Palette {
    emerald: PaletteColor;
    indigo: PaletteColor;
  }

  interface PaletteOptions {
    emerald?: PaletteColorOptions;
    indigo?: PaletteColorOptions;
  }
}

//This is to allow Material UI buttons have custom colors
declare module "@mui/material" {
  interface ButtonPropsColorOverrides {
    emerald: true;
    indigo: true;
  }
}

export const rootElement = document.getElementById("root");

// Declaring custom colors for Material UI
export const theme = createTheme({
  palette: {
    emerald: {
      main: "#047857", // Tailwind Emerald 700
      light: "#34d399", // Tailwind Emerald 400
      dark: "#064e3b", // Tailwind Emerald 900
      contrastText: "#a7f3d0", // Tailwind Emerald 200
    },
    indigo: {
      main: "#4338ca", // Tailwind Indigo 700
      light: "#818cf8", // Tailwind Indigo 400
      dark: "#312e81", // Tailwind Indigo 900
      contrastText: "#c7d2fe", // Tailwind Indigo 200
    },
  },
});

// for color references use https://tailwindcss.com/docs/customizing-colors
