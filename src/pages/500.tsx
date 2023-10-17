import { Box, Typography, Button } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

const Custom500 = () => {
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
          500
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
          Server-side Error Occurred
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
      <Footer onRoadmapClick={() => {}} />
    </Box>
  );
};

export default Custom500;
