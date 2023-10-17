// src/components/Roadmap.tsx
import { Box, Card, Divider, Typography } from '@mui/material';
import { CheckCircleOutline, Loop } from '@mui/icons-material';
import Image from 'next/image';  // Import the Image component from Next.js

const Roadmap = () => {
  return (
    <Box my={4} px={4}>
      <Typography variant="h4" sx={styles.title}>
        Roadmap S1 - The Beginning
      </Typography>
      <Divider sx={styles.divider} />
      
      <Box display="flex" justifyContent="space-between" alignItems="center" my={2} sx={styles.itemContainer}>
        <Typography sx={styles.text}>Create a website and socials</Typography>
        <Box sx={styles.iconWrapper}>
          <CheckCircleOutline />
        </Box>
      </Box>


      <Card variant="outlined" sx={styles.card}>
        <Box display="flex" justifyContent="space-between" alignItems="center" p={1} sx={styles.itemContainer}>
          <Typography sx={styles.text}>Release season 1 DePunkz NFTs</Typography>
          <Box sx={styles.iconWrapper}>
            <Loop />
          </Box>
        </Box>
      </Card>

      <Box display="flex" justifyContent="space-between" alignItems="center" my={2} sx={styles.itemContainer}>
        <Typography sx={styles.text}>Giveaway for holders of Season 1 NFTs</Typography>
        <Box sx={styles.iconWrapper}>
          <Loop />
        </Box>
      </Box>
  

      <Card variant="outlined" sx={styles.card}>
        
        <Box display="flex" justifyContent="space-between" alignItems="center" p={1} sx={styles.itemContainer}>
          <Typography sx={styles.text}>Release a development plan</Typography>
          <Box sx={styles.iconWrapper}>
            <Loop />
          </Box>
        </Box>
      </Card>

      <Box display="flex" justifyContent="space-between" alignItems="center" my={2} sx={styles.itemContainer}>
        <Typography sx={styles.text}>Start working on brand and merchandise</Typography>
        <Box sx={styles.iconWrapper}>
          <Loop />
        </Box>
      </Box>
  

      <Card variant="outlined" sx={styles.card}>
        <Box display="flex" justifyContent="space-between" alignItems="center" p={1} sx={styles.itemContainer}>
          <Typography sx={styles.text}>Release season 2 DePunkz NFTs</Typography>
          <Box sx={styles.iconWrapper}>
            <Loop />
          </Box>
        </Box>
      </Card>
      <Divider sx={styles.divider} />
     
    </Box>
  );
};
    

const styles = {
  title: {
    color: 'white',
    fontSize: '42px',
    fontFamily: '"Source Sans Pro"',
    fontWeight: 600,
    lineHeight: '52px',
    marginBottom: '20px',
  },
  text: {
    color: 'white',
    fontSize: '20px',
    fontFamily: '"Source Sans Pro"',
    lineHeight: '24px',
  },
  iconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#161616',
    backgroundColor: '#ff2d55',
    borderRadius: '5px',
    width: '40px',
    height: '40px',
  },
  divider: {
    backgroundColor: '#323232',
    height: '1px',
    my: '10px',
  },
  card: {
    backgroundColor: '#323232',
    color: 'white',
    mb: '20px',
  },
  itemContainer: {
    width: '100%',
    px: 2,
  },
};

export default Roadmap;
