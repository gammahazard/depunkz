import { Box, Typography, Grid } from '@mui/material';

const Section2 = () => {
  return (
    <Box py={8} px={2} style={{ backgroundColor: '#000', color: '#fff' }}>
      <Typography 
        variant="h5" 
        paragraph 
        align="center"
        style={{
          color: '#ffffff',
          fontSize: '24px',
          fontFamily: '"Source Sans Pro"',
          lineHeight: '31px',
          marginBottom: '40px',
        }}
        gutterBottom
      >
        DePunkz, the ultimate outsiders in a dystopian world, are the architects of innovation in a chaotic cyberpunk frontier. Join our rebellion, embrace the chaos, and help us carve out the future of DePunkz!
      </Typography>

      <Grid container spacing={5} justifyContent="center">
        {[
          {
            title: 'Collectible Series',
            text: 'DePunkz will have multiple series with different cyberpunk themes.'
          },
          {
            title: 'Uniqueness',
            text: 'Each series has 250 NFTs and over 80 traits.'
          },
          {
            title: 'Utility & Benefits',
            text: 'With the development progress, each NFT will be utilized, benefitting the holder.'
          }
        ].map((item, index) => (
          <Grid item key={index} xs={12} sm={4}>
            <Box 
              display="flex"
              flexDirection="column"
              alignItems="center"
              textAlign="center"  // Added this to center the text
              style={{ maxWidth: '350px', width: '100%', margin: '0 auto' }}  // Added auto margins to center the box
            >
              <Typography 
                variant="h6" 
                style={{
                  color: '#ffffff',
                  fontSize: '40px',
                  fontFamily: '"Source Sans Pro"',
                  fontWeight: 700,
                  lineHeight: '52px',
                }}
              >
                {item.title}
              </Typography>
              <Typography 
                variant="body1"
                style={{
                  color: '#ffffff',
                  fontSize: '20px',
                  fontFamily: '"Source Sans Pro"',
                  lineHeight: '26px',
                  marginTop: '10px',
                  height: '52px'
                }}
              >
                {item.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section2;
