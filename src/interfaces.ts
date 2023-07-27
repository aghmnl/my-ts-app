import {
  PaletteColor,
  PaletteColorOptions,
} from "@mui/material/styles/createPalette";

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
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    emerald: true;
    indigo: true;
  }
}

export interface Color {
  [key: number]: string;
}
