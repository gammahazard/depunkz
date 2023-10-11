// src/pages/gamelibrary.tsx
import { Box, Typography, Button, TextField } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const GameLibrary = () => {
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
            Game Library
          </Typography>
        </Box>

        <Box display="flex" justifyContent="center" alignItems="center" my={4}>
          <TextField
            sx={{
              width: '35%',
              height: '59px',
              backgroundColor: '#323232',
              color: '#b8b8b8',
              fontSize: '16px',
              fontFamily: '"Source Sans Pro"',
              fontWeight: 500,
              lineHeight: '22px',
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            }}
            placeholder="Search for a game"
            variant="outlined"
          />
          
          <Button
            sx={{
              width: '220px',
              height: '58px',
              backgroundColor: '#ff3b30',
              color: '#000',
              fontSize: '20px',
              fontFamily: '"Source Sans Pro"',
              fontWeight: 700,
              lineHeight: '26px',
              ml: 2,
            }}
          >
            Send
          </Button>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
};

export default GameLibrary;
