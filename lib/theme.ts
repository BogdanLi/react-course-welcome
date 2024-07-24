'use client';

import { createTheme } from '@mui/material';

const theme = createTheme({
  components: {
    MuiPaper: {
      defaultProps: {
        elevation: 4,
      },
      styleOverrides: {
        root: {},
      },
    },
  },
});

export default theme;
