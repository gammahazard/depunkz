import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Custom404 = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh" bgcolor="#000" color="#fff">
      <Navbar />

      <Box flex="1" display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Typography
          sx={{
            color: '#ff2d55',
            fontSize: '96px',
            fontFamily: '"Source Sans Pro"',
            fontWeight: 700,
            lineHeight: '125px',
            mb: 4,
          }}
        >
          404
        </Typography>
        <Typography
          sx={{
            color: '#fff',
            fontSize: '60px',
            fontFamily: '"Source Sans Pro"',
            fontWeight: 700,
            lineHeight: '70px',
            mb: 4,
          }}
        >
          Page Not Found
        </Typography>
        <Link href="/" passHref>
          <Button
            variant="outlined"
            sx={{
              borderColor: '#ff3b30',
              color: '#ff3b30',
              backgroundColor: 'rgba(0,0,0,0)',
              fontSize: '20px',
              fontFamily: '"Source Sans Pro"',
              fontWeight: 700,
              lineHeight: '26px',
              width: '220px',
              height: '58px',
              outline: 'none',
            }}
          >
            Go Home
          </Button>
        </Link>
      </Box>
      <Footer />
    </Box>
  );
};

export default Custom404;
