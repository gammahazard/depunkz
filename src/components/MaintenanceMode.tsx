// src/components/MaintenanceMode.tsx

import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

interface MaintenanceModeProps {
  active: boolean;
}

const MaintenanceMode: React.FC<MaintenanceModeProps> = ({ active }) => {
  if (!active) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        zIndex: 9999,
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        sx={{
          fontSize: '40px',
          mb: 2,
        }}
      >
        We&apos;ll be back soon! {/* <-- Fixed this line */}
      </Typography>
      <Typography
        sx={{
          mb: 4,
        }}
      >
        We are currently performing maintenance. Thank you for your patience.
      </Typography>
      <Link href="/" passHref>
        <Button variant="contained" color="primary">
          Refresh
        </Button>
      </Link>
    </Box>
  );
};

export default MaintenanceMode;
