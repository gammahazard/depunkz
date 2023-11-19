import '../styles/globals.css';
import Theme from '../components/Theme';
import CustomCursor from '../components/CustomCursor';
import type { AppProps } from 'next/app';
import MaintenanceMode from '../components/MaintenanceMode'; // Import the new component
import Head from 'next/head'; // Import Head from next/head

const MAINTENANCE_MODE = false; // Set to false to turn off maintenance mode

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <Head>
        <title>DePunkz</title> {/* Optional: Update the title */}
        <link rel="icon" href="/favicon.png" /> {/* Add the favicon link here */}
      </Head>
      <CustomCursor />
      <Component {...pageProps} />
      <MaintenanceMode active={MAINTENANCE_MODE} />
    </Theme>
  );
}

export default MyApp;