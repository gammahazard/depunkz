// src/pages/_app.tsx

import '../styles/globals.css';
import Theme from '../components/Theme';
import CustomCursor from '../components/CustomCursor';
import type { AppProps } from 'next/app';
import MaintenanceMode from '../components/MaintenanceMode';  // Import the new component

const MAINTENANCE_MODE = false; // Set to false to turn off maintenance mode

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <CustomCursor />
      <Component {...pageProps} />
      <MaintenanceMode active={MAINTENANCE_MODE} />  
    </Theme>
  );
}

export default MyApp;
