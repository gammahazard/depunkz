import { Box, Card, Divider, Typography } from '@mui/material';
import { useState } from 'react';
import Image from 'next/image';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const FAQ = () => {
  const [expanded, setExpanded] = useState([false, false, false, false, false, false]);

  const toggleExpansion = (index: number) => {
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
        <Typography sx={styles.text}><ul>DePunkz NFTs are unique digital collectible series focused on utility and gaming.</ul></Typography>
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
          <Typography sx={styles.text}>When is the Series 1 mint release?</Typography>
          {expanded[1] ? <ArrowCircleUpIcon sx={styles.icon} /> : <ArrowCircleDownIcon sx={styles.icon} />}
        </Box>
        {expanded[1] && (
          <Typography sx={styles.text}><ul>On November 24th, 500 Series 1 DePunkz NFTs will be available to mint.</ul></Typography>
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
        <Typography sx={styles.text}>How many NFTs and series there will be?</Typography>
        {expanded[2] ? <ArrowCircleUpIcon sx={styles.icon} /> : <ArrowCircleDownIcon sx={styles.icon} />}
      </Box>
      {expanded[2] && (
        <Typography sx={styles.text}><ul>The DePunkz NFTs will have in total of 10 collectible series with different cyberpunk themes and small supply of NFTs - 500. Each DePunkz collection will feature a limited number of NFTs, available in five distinct rarities.</ul></Typography>
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
          <Typography sx={styles.text}>What is the original mint price of Series 1?</Typography>
          {expanded[3] ? <ArrowCircleUpIcon sx={styles.icon} /> : <ArrowCircleDownIcon sx={styles.icon} />}
        </Box>
        {expanded[3] && (
          <Typography sx={styles.text}><ul>OG PRICE: 100 ADA</ul>
         <ul> WL PRICE: 110 ADA</ul>
         <ul> PUBLIC PRICE: 120 ADA</ul></Typography>
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
        <Typography sx={styles.text}><ul>TBA</ul></Typography>
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
          <Typography sx={styles.text}><ul>We chose the the Cardano blockchain due to its unique blend of scalability, interoperability, and fast transaction speeds, essential for a smooth gaming experience. Its innovative dual-layer architecture and compatibility with the Ergo platform ensure seamless integration of advanced gaming features and cross-chain liquidity</ul></Typography>
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
