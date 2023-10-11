import { Box, Typography, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const SectionText = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box 
      display="flex" 
      flexDirection={isMobile ? 'row' : 'row'} 
      alignItems="center" 
      justifyContent="space-between" 
      my={4} 
      px={isMobile ? 2 : 4}
    >
      <Box flex={1} p={2} mb={isMobile ? 0 : 0} maxWidth={isMobile ? '100%' : 'unset'}>
        <Typography 
          variant="h4" 
          gutterBottom 
          style={{
            color: '#ffffff',
            fontSize: isMobile ? '32px' : '60px',
            fontFamily: '"Source Sans Pro"',
            fontWeight: 700,
            lineHeight: isMobile ? '36px' : '70px',
          }}
        >
          DePunkz Society
        </Typography>
        <Typography 
          variant="body1" 
          paragraph 
          style={{
            color: '#ffffff',
            fontSize: '20px',
            fontFamily: '"Source Sans Pro"',
            lineHeight: '26px',
          }}
        >
          DePunkz is an innovative NFT project - a decentralized platform for unique digital collectibles.
          Experience the thrill of owning rare and valuable digital assets with Depunkz.
        </Typography>
        <Button 
          variant="contained"
          style={{
            backgroundColor: '#ff2d55',
            color: '#000000',
            fontSize: '20px',
            fontWeight: 700,
            marginBottom: isMobile ? '8px' : '0px', // Added this line
            lineHeight: '26px',
            width: '200px',
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
            backgroundColor: 'rgba(0,0,0,0)',
            fontSize: '20px',
            fontWeight: 700,
            lineHeight: '26px',
            width: '156px',
            height: '60px',
            outline: 'none',
 
          }}
        >
          Buy NFT
        </Button>
      </Box>
      <Box 
        flex={1} 
        p={2} 
        style={{
          backgroundImage: 'url(/section1.png)',
          backgroundPosition: 'center center',
          backgroundSize: isMobile ? 'contain' : 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: '8px',
          width: '100%',  
          height: isMobile ? '550px' : '440px',
        }}
      ></Box>
    </Box>
  );
};

export default SectionText;
