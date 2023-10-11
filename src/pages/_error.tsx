// src/pages/_error.tsx

import { NextPageContext } from 'next';
import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface ErrorProps {
  statusCode: number;
}

const ErrorPage = ({ statusCode }: ErrorProps) => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bgcolor="#000" color="#fff">
      <Navbar />
      <Box flex="1" display="flex" alignItems="center" justifyContent="center">
        <Typography variant="h1">
          {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
