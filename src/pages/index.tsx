import { Box } from '@mui/material';
import { useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SectionText from '../components/SectionText';
import Section2 from '../components/Section2';
import Roadmap from '../components/Roadmap';
import Faq from '../components/Faq';
import AnimationComponent from '../components/AnimationComponent';
import NeohubSection from '../components/NeohubSection';
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
      <Box my={4} style={{ marginTop: 0 }}>
  <img src="/banner.png" alt="DePunkz Banner" style={{ width: '100%', height: 'auto' }} />
</Box>
      <SectionText />
      <Section2 />
      <div ref={roadmapRef}>
        <Roadmap />
      </div>
      <NeohubSection />
      <Faq />
      <Footer />
    </Box>
  );
}