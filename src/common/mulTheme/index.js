import { createTheme } from '@mui/material/styles';
import palette from './palette';
import typography from './typography';
import overrides from './overrides';

const baseTheme = {
  palette,
  typography,
  components: overrides,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600, // 모바일
      md: 768, // 태블릿
      lg: 1256,
      xl: 1536,
    }
  }
};

export const theme = createTheme(baseTheme);
// export const theme = createTheme(adaptV4Theme(baseTheme));
export const themeWithRtl = createTheme({ ...baseTheme, direction: 'rtl' });
