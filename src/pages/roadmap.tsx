import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Roadmap = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Navbar />
      <Box flex="1" bgcolor="#000" color="#fff">
        <Box textAlign="center" py={5}>
          <Typography
            sx={{
              color: '#ff2d55',
              fontSize: '96px',
              fontFamily: '"Source Sans Pro"',
              fontWeight: 700,
              lineHeight: '125px',
            }}
          >
            DePunkz
          </Typography>
          <Typography
            sx={{
              color: '#fff',
              fontSize: '60px',
              fontFamily: '"Source Sans Pro"',
              fontWeight: 700,
              lineHeight: '70px',
            }}
          >
          Roadmap
          </Typography>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Roadmap;