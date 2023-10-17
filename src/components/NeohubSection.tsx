import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
export default function NeohubSection() {
  return (
    <Box 
        display="flex" 
        flexDirection={{ xs: 'column', md: 'row' }} // Updated for responsive design
        alignItems="center" 
        justifyContent="center" 
        mt={4}
        textAlign={{ xs: 'center', md: 'left' }} // Updated for responsive design
        px={{ xs: 2, md: 0 }} // Added horizontal padding for smaller screens
    >
      <Box 
        mb={{ xs: 2, md: 0 }} // Added bottom margin for smaller screens
        mr={{ xs: 0, md: 4 }} // Updated right margin for responsive design
        sx={{ 
          width: { xs: '100%', md: '445px' }, // Updated for responsive design
          height: { xs: 'auto', md: '446px' }, // Updated for responsive design
          maxWidth: { xs: '345px', md: 'none' }, // Set max width for smaller screens
          borderRadius: '8px',
         right:'500px',
          backgroundImage: 'url(/logo.png)',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Placeholder to ensure the box size is respected. */}
        <Box sx={{ width: '100%', paddingBottom: { xs: '100%', md: '0' } }} />
      </Box>
      <Box sx={{ maxWidth: '400px' }}>
        <Typography
          variant="h1"
          sx={{
            color: '#ffffff',
            fontSize: { xs: '40px', md: '60px' }, // Updated for responsive design
            fontFamily: '"Source Sans Pro"',
            fontWeight: 700,
            lineHeight: { xs: '45px', md: '70px' }, // Updated for responsive design
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
            justifyContent={{ xs: 'center', md: 'flex-start' }} // Updated for responsive design
            flexDirection={{ xs: 'column', md: 'row' }} // Updated for responsive design
            alignItems="center" // Added for center alignment on smaller screens
            gap={2} // Added gap for space between buttons on smaller screens
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
              mb: { xs: 2, md: 0 }, // Added bottom margin for smaller screens
            }}
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
     
    </Box>
 
  );
}
