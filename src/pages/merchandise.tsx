// src/pages/Merchandise.tsx
import { Box, Typography, TextField, Button } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Merchandise = () => {
    return (
      <Box sx={styles.pageContainer}>
        <Navbar />
  
        <Box sx={styles.contentContainer}>
          <Box sx={styles.headerContainer}>
            <Typography sx={styles.header}>DePunkz Merchandise</Typography>
            <Typography sx={styles.subHeader}>Join Waitlist</Typography>
          </Box>
  
          <Box sx={styles.formContainer}>
            <TextField
              variant="outlined"
              placeholder="Enter your email"
              sx={styles.input}
            />
            <Button sx={styles.button}>Send</Button>
          </Box>
        </Box>
  
        <Footer onRoadmapClick={() => {}} />
      </Box>
    );
  };
const styles = {
    pageContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    contentContainer: {
      flex: '1', // This ensures that this container grows to take all available space
    },
    headerContainer: {
      textAlign: 'center',
      paddingTop: '50px',
      paddingBottom: '30px',
      backgroundColor: '#000',
    },
  header: {
    color: '#ff2d55',
    fontSize: '60px',
    fontFamily: '"Source Sans Pro"',
    fontWeight: 700,
    lineHeight: '78px',
    marginBottom: '20px',
  },
  subHeader: {
    color: '#ffffff',
    fontSize: '60px',
    fontFamily: '"Source Sans Pro"',
    fontWeight: 700,
    lineHeight: '70px',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px',
    backgroundColor: '#000',
  },
  input: {
    width: '480px',
    height: '57px',
    backgroundColor: '#323232',
    color: '#b8b8b8',
    fontSize: '16px',
    fontFamily: '"Source Sans Pro"',
    fontWeight: 500,
    lineHeight: '22px',
    marginRight: '20px',
    '& .MuiOutlinedInput-input': {
      padding: '15px',
    },
  },
  button: {
    width: '116px',
    height: '57px',
    backgroundColor: '#ff3b30',
    color: '#000',
    fontSize: '20px',
    fontFamily: '"Source Sans Pro"',
    fontWeight: 700,
    lineHeight: '26px',
  },
};

export default Merchandise;
