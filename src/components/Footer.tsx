import { Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';

const Footer = ({ onRoadmapClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ ...styles.container, ...(isMobile && styles.mobileContainer) }}>
      <Box>
        <Typography sx={styles.title}>Connect with Us</Typography>
        <Typography sx={styles.subtitle}>Explore the world of DePunkz NFTs.</Typography>
      </Box>

      <Box sx={styles.linksContainer}>
        <Box sx={styles.menuItemBox}>
          <Typography
            component="a"
            href="https://docs.depunkz.io"
            target="_blank"
            rel="noopener noreferrer"
            sx={styles.menuItemWithWeight}
          >
            Litepaper
          </Typography>
        </Box>

        <Box sx={styles.menuItemBox}>
          <Link href="/series" passHref>
            <Typography component="a" sx={styles.menuItem}>
              Series
            </Typography>
          </Link>
        </Box>

        <Box sx={styles.menuItemBox}>
          <Typography
            sx={styles.menuItemWithWeight}
            onClick={onRoadmapClick}
            style={{ cursor: 'pointer' }}
          >
            Roadmap
          </Typography>
        </Box>

        <Box sx={styles.menuItemBox}>
          <Link href="/overview" passHref>
            <Typography component="p" sx={styles.menuItem}>
              About us
            </Typography>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#000',
    color: '#fff',
    padding: '20px 40px',
    position: 'relative',
    bottom: 0,
    width: '100%',
  },

  mobileContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '20px 10px',
   
  },

  title: {
    fontSize: '32px',
    mb: '10px',
  },

  subtitle: {
    fontSize: '18px',
  },

  linksContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  
  },

  menuItemBox: {
    mb: 2,
  },

  menuItem: {
    fontSize: '18px',
    color: '#fff',
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },

  menuItemWithWeight: {
    fontSize: '18px',
    fontWeight:0,
   
    color: '#fff',
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none',
    },
  },
};

export default Footer;
