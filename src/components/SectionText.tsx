import { Box, Typography, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const SectionText = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
            fontFamily: '"Source Sans Pro"',
            lineHeight: '26px',
            marginBottom: '20px',
          }}
        >
          DePunkz is an innovative NFT project - a decentralized platform for unique digital collectibles.
          Experience the thrill of owning rare and valuable digital assets with Depunkz.
        </Typography>
        <Box display="flex" gap={2} style={{maxWidth: '100%'}}>
          <Button 
            variant="contained"
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
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          borderRadius: '8px',
          width: '100%',  
          height: 'auto',
          minHeight: isMobile ? '300px' : '550px',
        }}
      ></Box>
    </Box>
  );
};

export default SectionText;
