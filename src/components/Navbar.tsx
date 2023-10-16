import { Box, Button, Drawer, IconButton, List, ListItem, Typography } from '@mui/material';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';  // Import the Image component from Next.js

interface NavbarProps {
  onRoadmapClick?: () => void;
}

export default function Navbar({ onRoadmapClick }: NavbarProps) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleMobileMenuOpen = () => setMobileMenuOpen(true);
  const handleMobileMenuClose = () => setMobileMenuOpen(false);

  const handleRoadmapClick = () => {
    if (router.pathname !== '/') {
      router.push('/', '/', { shallow: true }).then(() => onRoadmapClick?.());
    } else {
      onRoadmapClick?.();
    }
  };

  const MobileMenu = () => {
    useEffect(() => {
      const drawer = document.querySelector('.MuiDrawer-root');
      if (drawer) {
        if (isMobileMenuOpen) {
          drawer.classList.add('drawer-enter');
          drawer.classList.remove('drawer-exit');
        } else {
          drawer.classList.add('drawer-exit');
          drawer.classList.remove('drawer-enter');
        }
      }
    }, [isMobileMenuOpen]);

    return (
      <Drawer
        anchor="right"
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        PaperProps={{
          style: {
            backgroundColor: 'black',
            color: 'white',
            width: '250px',
            borderLeft: '1px solid white',
          },
        }}
      >
        <List style={{ alignItems: 'center', textAlign: 'center' }}>
          {['Whitepaper', 'Series', 'Roadmap', 'About us', 'Merchandise'].map((text) => (
            <ListItem button key={text} onClick={handleMobileMenuClose} style={{ justifyContent: 'center' }}>
              <Link href={`/${text.toLowerCase().replace(' ', '-')}`} passHref>
                <Typography variant="body1" className="nav-item" component="a" style={{ textDecoration: 'none' }}>{text}</Typography>
              </Link>
            </ListItem>
          ))}
          <ListItem button onClick={() => { handleMobileMenuClose(); handleRoadmapClick(); }} style={{ justifyContent: 'center' }}>
            <Typography variant="body1" className="nav-item" component="div" style={{ textDecoration: 'none' }}>Roadmap</Typography>
          </ListItem>
          <ListItem button onClick={handleMobileMenuClose} style={{ justifyContent: 'center' }}>
  <Link href="/gamelibrary" passHref>
    <Typography variant="body1" className="nav-item" component="a" style={{ textDecoration: 'none' }}>Neohub</Typography>
  </Link>
</ListItem>
        </List>
      </Drawer>
    );
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
      <Box onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
        <Image 
          src="/logo.png"   // The path to your logo
          alt="DePunkz Logo" // Alt text for your logo
          width={50}        // Set the width of your logo
          height={50}        // Set the height of your logo
          objectFit="contain"
        />
      </Box>
  
      <Box display={{ xs: 'none', md: 'flex' }} alignItems="center" justifyContent="center" flexGrow={1}>
        <Box display="flex" alignItems="center" gap={2}>
          <Link href="/gamelibrary" passHref><Button className="nav-item">Whitepaper</Button></Link>
          <Link href="/series" passHref><Button className="nav-item">Series</Button></Link>
          <Button className="nav-item" onClick={handleRoadmapClick}>Roadmap</Button>
          <Link href="/team" passHref><Button className="nav-item">About Us</Button></Link>
          <Link href="/merchandise" passHref><Button className="nav-item">Merchandise</Button></Link>
        </Box>
      </Box>
  
      <Box display={{ xs: 'none', md: 'block' }}>
  <Link href="/gamelibrary" passHref>
    <Button variant="outlined" className="join-btn">Neohub</Button>
  </Link>
</Box>
  
      <Box display={{ xs: 'block', md: 'none' }} alignItems="center">
  <IconButton href="#" target="_blank" rel="noopener noreferrer">
    <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
  </IconButton>
  <IconButton href="#" target="_blank" rel="noopener noreferrer">
    <Image src="/discord.svg" alt="Discord" width={24} height={24} />
  </IconButton>
  <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMobileMenuOpen}>
    <MenuIcon />
  </IconButton>
  <MobileMenu />
</Box>
    </Box>
  );
}
