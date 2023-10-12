import { Box } from '@mui/material';
import { useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SectionText from '../components/SectionText';
import Roadmap from '../components/Roadmap';
import AnimationComponent from '../components/AnimationComponent';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

export default function Home() {
  const roadmapRef = useRef<HTMLDivElement>(null);  // Specify the type here
  const router = useRouter();

  const scrollToRoadmap = () => {
    roadmapRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (router.asPath.includes('#roadmap')) {
      scrollToRoadmap();
    }
  }, [router.asPath]);

  return (
    <Box>
      <Navbar onRoadmapClick={scrollToRoadmap} />
      <AnimationComponent />
      <Box my={4}>
        <img src="/banner.png" alt="DePunkz Banner" style={{ width: '100%', height: 'auto' }} />
      </Box>
      <SectionText />
      <div ref={roadmapRef}>
        <Roadmap />
      </div>
      <Footer />
    </Box>
  );
}