import { Box, Typography, IconButton } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ ...styles.container, ...(isMobile && styles.mobileContainer) }}>
      <Box>
        <Typography sx={{ ...styles.title, ...(isMobile && styles.mobileTitle) }}>
          Connect with Us
        </Typography>
        <Typography sx={styles.subtitle}>Explore the world of DePunkz NFTs.</Typography>
        <Box sx={styles.iconsContainer}>
          <IconButton sx={styles.icon} href="#" target="_blank" rel="noopener noreferrer">
            <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
          </IconButton>
          <IconButton sx={styles.icon} href="#" target="_blank" rel="noopener noreferrer">
            <Image src="/discord.svg" alt="Discord" width={24} height={24} />
          </IconButton>
        </Box>
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
    position: 'relative',
    bottom: 0, // This ensures that the footer stays at the bottom of the page
    width: '100%', // This ensures that the footer is full-width
  },
  
  mobileContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px 10px',
  },
  title: {
    fontSize: '32px',
    fontFamily: '"Source Sans Pro"',
    fontWeight: 600,
    lineHeight: '36px',
    mb: '10px',
  },
  mobileTitle: {
    fontSize: '24px',
    lineHeight: '28px',
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
  iconsContainer: {
    display: 'flex',
    mt: 2, // Adjust the margin as needed
  },
  icon: {
    color: '#fff', // Adjust the color as needed
    ml: 1, // Adjust the margin as needed
    '&:first-of-type': {
      ml: 0, // Remove left margin for the first icon
    },
  },

};

export default Footer;
