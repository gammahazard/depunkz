import { Box, Card, Divider, Typography } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const FAQ = () => {
  const [expanded, setExpanded] = useState([false, false, false, false, false, false]);

  const toggleExpansion = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <Box my={4} px={4}>
      <Typography variant="h4" sx={styles.title}>
        FAQ
      </Typography>
      <Divider sx={styles.divider} />

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my={2}
        sx={styles.itemContainer}
        onClick={() => toggleExpansion(0)}
      >
        <Typography sx={styles.text}>What are DePunkz?</Typography>
        {expanded[0] ? <ArrowCircleUpIcon sx={styles.icon} /> : <ArrowCircleDownIcon sx={styles.icon} />}
      </Box>
      {expanded[0] && (
        <Typography sx={styles.text}>Answer: TBA</Typography>
      )}

      <Card variant="outlined" sx={styles.card}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={1}
          sx={styles.itemContainer}
          onClick={() => toggleExpansion(1)}
        >
          <Typography sx={styles.text}>How many NFTs there are?</Typography>
          {expanded[1] ? <ArrowCircleUpIcon sx={styles.icon} /> : <ArrowCircleDownIcon sx={styles.icon} />}
        </Box>
        {expanded[1] && (
          <Typography sx={styles.text}>Answer: TBA</Typography>
        )}
      </Card>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my={2}
        sx={styles.itemContainer}
        onClick={() => toggleExpansion(2)}
      >
        <Typography sx={styles.text}>How many series there will be?</Typography>
        {expanded[2] ? <ArrowCircleUpIcon sx={styles.icon} /> : <ArrowCircleDownIcon sx={styles.icon} />}
      </Box>
      {expanded[2] && (
        <Typography sx={styles.text}>Answer: TBA</Typography>
      )}

      <Card variant="outlined" sx={styles.card}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={1}
          sx={styles.itemContainer}
          onClick={() => toggleExpansion(3)}
        >
          <Typography sx={styles.text}>What is the original mint price?</Typography>
          {expanded[3] ? <ArrowCircleUpIcon sx={styles.icon} /> : <ArrowCircleDownIcon sx={styles.icon} />}
        </Box>
        {expanded[3] && (
          <Typography sx={styles.text}>Answer: TBA</Typography>
        )}
      </Card>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        my={2}
        sx={styles.itemContainer}
        onClick={() => toggleExpansion(4)}
      >
        <Typography sx={styles.text}>What is the policy ID for the DePunkz collection?</Typography>
        {expanded[4] ? <ArrowCircleUpIcon sx={styles.icon} /> : <ArrowCircleDownIcon sx={styles.icon} />}
      </Box>
      {expanded[4] && (
        <Typography sx={styles.text}>Answer: TBA</Typography>
      )}

      <Card variant="outlined" sx={styles.card}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          p={1}
          sx={styles.itemContainer}
          onClick={() => toggleExpansion(5)}
        >
          <Typography sx={styles.text}>Why Cardano Blockchain?</Typography>
          {expanded[5] ? <ArrowCircleUpIcon sx={styles.icon} /> : <ArrowCircleDownIcon sx={styles.icon} />}
        </Box>
        {expanded[5] && (
          <Typography sx={styles.text}>Answer: TBA</Typography>
        )}
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
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    color: 'red',
    width: '40px',
    height: '40px',
  },
};

export default FAQ;
