import { PaletteColor } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    secondary: PaletteColor & { focus?: string };
    text: Palette['text'] & { focus?: string };
  }

  interface PaletteOptions {
    secondary?: PaletteColorOptions & { focus?: string };
    text?: PaletteOptions['text'] & { focus?: string };
  }
}
