import { Box, Typography, Button } from '@mui/material';

const SectionText = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" my={4} px={4}>
      <Box flex={1} mr={2} p={2}>
        <Typography 
          variant="h4" 
          gutterBottom 
          style={{
            color: '#ffffff',
            fontSize: '60px',
            fontFamily: '"Source Sans Pro"',
            fontWeight: 700,
            lineHeight: '70px',
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
            lineHeight: '26px',
            width: '281px',
            height: '60px',
            marginRight: '20px', // added for spacing between buttons
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
            width: '172px',
            height: '60px',
            outline: 'none',
          }}
        >
          Buy NFT
        </Button>
      </Box>
      <Box 
        flex={1} 
        ml={2} 
        p={2} 
        style={{
          backgroundImage: 'url(/section1.png)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          borderRadius: '8px',
          width: '440px',
          height: '440px',
        }}
      ></Box>
    </Box>
  );
};

export default SectionText;
