// src/pages/index.tsx
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import SectionText from '../components/SectionText';  // Import the new component
import Roadmap from '../components/Roadmap';
import AnimationComponent from '../components/AnimationComponent';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <Box>
      <Navbar />
<AnimationComponent/>
      {/* Banner image section */}
      <Box my={4}>
        {/* Replace 'banner.jpg' with your actual banner image path */}
        <img src="/banner.png" alt="DePunkz Banner" style={{ width: '100%', height: 'auto' }} />
      </Box>

      {/* DePunkz Society section - Updated to use the new SectionText component */}
      <SectionText />
<Roadmap />
<Footer />
    </Box>
  );
}
