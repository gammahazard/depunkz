// components/Theme.tsx

import { ReactNode } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import AnimationComponent from './AnimationComponent'; 

const theme = createTheme({
  palette: {
    background: {
      default: '#000000',
    },
    text: {
      primary: '#ffffff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: 'white',
          borderColor: 'white',
          borderRadius:0,

          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white'
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          color: 'white',
        },
      },
    },
    // Add more component customizations here as needed
  },
});

interface ThemeProps {
  children: ReactNode;
}

export default function Theme({ children }: ThemeProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AnimationComponent />
      {children}
    </ThemeProvider>
  );
}
