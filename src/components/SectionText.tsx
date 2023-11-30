import { Box, Typography, Button, Snackbar } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import React, {useState} from 'react';
const SectionText = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSnackbarOpen = () => {
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = (event : any, reason : any) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <Box 
      display="flex" 
      flexDirection={isMobile ? 'column' : 'row'} 
      alignItems="center" 
      justifyContent="space-between" 
      my={4} 
      px={isMobile ? 2 : 4}
    >
      <Box flex={1} p={2} mb={isMobile ? 2 : 0} maxWidth="100%">
        <Typography 
          variant="h4" 
          gutterBottom 
          align="left"
          style={{
            color: '#ffffff',
            fontSize: isMobile ? '32px' : '60px',
            fontFamily: '"Source Sans Pro"',
            fontWeight: 700,
            lineHeight: isMobile ? '36px' : '70px',
          }}
        >
          DePunkz
        </Typography>
        <Typography 
          variant="body1" 
          paragraph 
          align="left"
          style={{
            color: '#ffffff',
            fontSize: '20px',
            width:'70%',
            fontFamily: '"Source Sans Pro"',
            lineHeight: '26px',
            marginBottom: '20px',
          }}
        >
           DePunkz is an NFT project building NEOHUB, a gaming platform where players can play games, win prizes, chat, listen to music, swap tokens, and more.
        </Typography>
        <Box display="flex" gap={2} style={{maxWidth: '80%'}}>
          <Button 
            variant="contained"
            onClick={handleSnackbarOpen}
            style={{
              backgroundColor: '#ff2d55',
              color: '#000000',
              fontSize: '20px',
              fontWeight: 700,
              lineHeight: '26px',
              width: '60%', // Adjusted width
              height: '60px',
              marginRight: '20px',
              outline: 'none',
            }}
          >
            Discover DePunkz
          </Button>
          <Button 
  onClick={() => window.open('https://saturnnft.io/mint/v2/497056e1-3aaf-4488-b627-91afe872397e', '_blank', 'noopener,noreferrer')}
  variant="outlined"
  style={{
    borderColor: '#ff2d55',
    color: '#ff2d55',
    fontSize: '20px',
    fontWeight: 700,
    lineHeight: '26px',
    width: '40%', // Adjusted width
    height: '60px',
    outline: 'none',
  }}
>
  Buy NFT
</Button>
        </Box>
      </Box>
      <Box 
        flex={1} 
        p={2} 
        style={{
          backgroundImage: 'url(/section1.png)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: '8px',
          marginRight: '12%',
        
          maxHeight: isMobile ? '300px' : '350px',
          minHeight: isMobile ? '300px' : '350px',
          maxWidth: isMobile ? '300px' : '300px',
          minWidth: isMobile ? '300px' : '300px',
        }}
      ></Box>

    </Box>
  );
};

export default SectionText;
