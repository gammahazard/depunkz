// src/pages/gamelibrary.tsx

import { Box, Typography, Button, TextField } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Series = () => {
  return (
    <Box>
      <Navbar />

      <Box textAlign="center" py={5} bgcolor="#000" color="#fff">
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
          Series Library
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
          placeholder="Search by #"
          variant="outlined"
        />
        <Button
          sx={{
            width: '95px',
            height: '59px',
            border: '1px solid #ff3b30',
            backgroundColor: 'transparent',
            color: '#ff3b30',
            fontSize: '20px',
            fontFamily: '"Source Sans Pro"',
            fontWeight: 700,
            lineHeight: '26px',
            ml: 2,
          }}
        >
          Series
        </Button>
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

      <Box display="flex" flexWrap="wrap" justifyContent="center" pb={5}>
        {[...Array(8)].map((_, index) => (
          <Button
            key={index}
            sx={{
              width: '281px',
              height: '345px',
              border: '1px solid #ff3b30',
              backgroundColor: 'transparent',
              color: '#fff',
              fontSize: '20px',
              fontFamily: '"Source Sans Pro"',
              fontWeight: 700,
              lineHeight: '26px',
              m: 2, // Adjusted for more space around the buttons
            }}
          >
            Placeholder {index + 1}
          </Button>
        ))}
      </Box>

      <Footer />
    </Box>
  );
};

export default Series;
