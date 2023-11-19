import { Box, Button, Typography, Snackbar } from '@mui/material';
import React, {useState} from 'react'
import Link from 'next/link';
export default function NeohubSection() {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  // Function to open Snackbar
  const handleOpenSnackbar = () => {
    setOpenSnackbar(true);
  };

  // Function to close Snackbar
  const handleCloseSnackbar = (event : any , reason : any) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };
  return (
    <Box 
        display="flex" 
        flexDirection={{ xs: 'column', md: 'row' }}
        alignItems="center" 
        justifyContent="center" 
        mt={4}
        textAlign={{ xs: 'center', md: 'left' }}
        px={{ xs: 2, md: 0 }}
    >
      <Box 
        mb={{ xs: 2, md: 0 }}
        mr={{ xs: 0, md: 4 }}
        sx={{ 
          width: { xs: '100%', md: '445px' },
          height: { xs: 'auto', md: '446px' },
          maxWidth: { xs: '345px', md: 'none' },
          borderRadius: '8px',
          right:'500px',
          backgroundImage: 'url(/logo.png)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box sx={{ width: '100%', paddingBottom: { xs: '100%', md: '0' } }} />
      </Box>
      <Box sx={{ maxWidth: '400px' }}>
        <Typography
          variant="h1"
          sx={{
            color: '#ffffff',
            fontSize: { xs: '40px', md: '60px' },
            fontFamily: '"Source Sans Pro"',
            fontWeight: 700,
            lineHeight: { xs: '45px', md: '70px' },
            mb: 2,
          }}
        >
          Neohub
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#d1d5db',
            fontSize: '20px',
            fontFamily: '"Source Sans Pro"',
            lineHeight: '26px',
          }}
          paragraph
        >
          Game library where you can play, have fun, compete, and have a chance to win various prizes!
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#d1d5db',
            fontSize: '20px',
            fontFamily: '"Source Sans Pro"',
            lineHeight: '26px',
            mb: 2,
          }}
        >
          Stay tuned for exciting updates and unleash your gaming prowess!
        </Typography>
        <Box 
            display="flex" 
            justifyContent={{ xs: 'center', md: 'flex-start' }}
            flexDirection={{ xs: 'column', md: 'row' }}
            alignItems="center"
            gap={2}
        >
          <Button
            variant="outlined"
            sx={{
              borderColor: '#ff2d55',
              backgroundColor: 'rgba(0,0,0,0)',
              color: '#ff2d55',
              fontSize: '20px',
              fontFamily: '"Source Sans Pro"',
              fontWeight: 700,
              lineHeight: '26px',
              width: '172px', 
              height: '60px',
              mb: { xs: 2, md: 0 },
            }}
            onClick={handleOpenSnackbar}
          >
            Coming Soon
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ff2d55',
              color: '#000',
              fontSize: '20px',
              fontFamily: '"Source Sans Pro"',
              fontWeight: 700,
              lineHeight: '26px',
              width: '200px',
              height: '60px',
            }}
          >
            <a href="https://docs.depunkz.io" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
              Whitepaper
            </a>
          </Button>
        </Box>
      </Box>
     
      {/* Snackbar Component */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message="Feature Coming Soon!"
      />
    </Box>
);
          }