// src/pages/_app.tsx

import '../styles/globals.css';
import Theme from '../components/Theme';
import CustomCursor from '../components/CustomCursor'; // Import the CustomCursor component
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      <CustomCursor />  {/* Include the CustomCursor component */}
      <Component {...pageProps} />
    </Theme>
  );
}

export default MyApp;