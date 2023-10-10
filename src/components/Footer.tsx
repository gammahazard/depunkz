// src/components/Footer.tsx
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={styles.container}>
      <Box>
        <Typography sx={styles.title}>Connect with Us</Typography>
        <Typography sx={styles.subtitle}>Explore the world of DePunkz NFTs.</Typography>
      </Box>

      <Box>
        <Typography sx={styles.menuItem}>Learn More</Typography>
        <Typography sx={styles.menuItem}>Discover</Typography>
        <Typography sx={styles.menuItem}>Get Valuable</Typography>
        <Typography sx={styles.menuItem}>Contact The</Typography>
      </Box>
    </Box>
  );
};
 const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px 40px',
  },
  title: {
    fontSize: '32px',
    fontFamily: '"Source Sans Pro"',
    fontWeight: 600,
    lineHeight: '36px',
    mb: '10px',
  },
  subtitle: {
    fontSize: '18px',
    fontFamily: '"Source Sans Pro"',
    fontWeight: 700,
    lineHeight: '22px',
  },
  menuItem: {
    fontSize: '18px',
    fontFamily: '"Source Sans Pro"',
    fontWeight: 700,
    lineHeight: '22px',
    mb: '10px',
  },
};

export default Footer;
