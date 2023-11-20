import { Box, Button, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image'
export default function AboutUs() {
  return (
    <Box>
      <Navbar />

      <Box mt={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Typography
          sx={{
            color: '#ffffff',
            fontSize: '60px',
            fontFamily: '"Source Sans Pro"',
            fontWeight: 700,
            lineHeight: '70px',
            mb: 4,
            textAlign: 'center',
          }}
        >
          OVERVIEW
        </Typography>

        {/* Paragraph Sections */}
        {[{
   title: 'Sustained Development and Transparency on Ergo',
   content: 'Our team, a trio of dedicated professionals, has not only developed CyberVerse on the Ergo Blockchain but also ensured its continual growth through regular updates. This commitment reflects our dedication to providing lasting value to our users. We maintain a high level of transparency development progress, consistently keeping our community informed and involved.'}, {
   }, {
  title: 'Responsive to Community Feedback',
  content: 'We take community feedback very seriously, recognizing it as a crucial element in our development process. The insights and suggestions from our community have been integral in shaping CyberVerse, demonstrating our commitment to a user-centric approach. This responsive attitude has been a key factor in the games success and will continue to be a significant aspect of our work on DePunkz'}, {
  }, {
    title: 'Leveraging Experience for DePunkz on Cardano ',
    content: 'As we expand to the Cardano Blockchain with DePunkz, we bring with us the rich experience and lessons learned from our journey on Ergo. Our aim is to replicate and enhance our successes, tapping into the broader opportunities that Cardano offers. The growth and understanding we have gained on Ergo are pivotal as we embark on this new venture'   }, {
      },  {
       },{ title: 'Vision for the Future',
  content: 'DePunkz is focused on creating a connection between the gaming communities on the Ergo and Cardano blockchains. Drawing from our experience with Ergo, we plan to engage with the Cardano community to offer a unified gaming experience. Our approach is centered on interoperability, continuous improvement, and community feedback, aiming to make DePunkz a notable project in blockchain gaming.'
}].map((section, index) => (
  <Box key={index} mb={4} px={{ xs: 2, md: 0 }}>  {/* Added padding here */}
    <Typography
      variant="h6"
      sx={{
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: '20px',
        fontFamily: '"Source Sans Pro"',
        lineHeight: '31px',
        textAlign: 'center',
        mb: 2,
      }}
    >
      {section.title}
    </Typography>

    <Typography
      variant="body1"
      sx={{
        color: '#ffffff',
        fontSize: '18px',
        fontFamily: '"Source Sans Pro"',
        lineHeight: '24px',
        textAlign: 'center',
        maxWidth: '800px',
      }}
      paragraph
    >
      {section.content}
    </Typography>
  </Box>
))}
      </Box>

      <Box mt={4} mb={8} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
        <Typography
          sx={{
            color: '#ffffff',
            fontSize: '60px',
            fontFamily: '"Source Sans Pro"',
            fontWeight: 700,
            lineHeight: '70px',
            mb: 4,
            textAlign: 'center',
          }}
        >
          TEAM
        </Typography>

        <Box
          display="flex"
          gap={2}
          justifyContent="center"
          px={{ xs: 2, md: 0 }}
          flexWrap={{ xs: 'wrap', md: 'nowrap' }}
        >
          {[
            { name: 'Neopunk', role: 'Founder & Project Lead', image: '/pixel.png' },
            { name: 'Mongo', role: 'Co-Founder & Full-Stack Dev', image: '/mongo.png' },
            { name: 'Hero', role: 'Game Developer', image: '/hero.png' }
          ].map((member) => (
            <Box
              component={Button}
              key={member.name}
              sx={{
                border: '1px solid #ff3b30',
                
                backgroundColor: 'rgba(0,0,0,0)',
                color: '#ff2d55',
                fontSize: '20px',
                fontFamily: '"Source Sans Pro"',
                fontWeight: 700,
                lineHeight: '26px',
                width: { xs: 'calc(100% - 16px)', md: '250px' },
                height: '325px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-end',
                position: 'relative',
                pb: 2,
                mb: { xs: 2, md: 0 },
              }}
            >
           <Image
  src={member.image}
  alt={member.name}
  layout="fill"
  objectFit="cover" // Changed to cover to ensure the image covers the entire card
  style={{
    position: 'absolute', // Ensure the image is positioned absolutely within the card
    top: 0,
  
    left: 0,
    zIndex: -1 // Place the image behind the text content
  }}
/>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  backgroundColor: '#ff3b30',
                  py: 1,
                  textAlign: 'left',
                  paddingLeft: '10px',
                }}
              >
                <Typography
                  sx={{
                    color: '#000000',
                    fontSize: '32px',
                    fontFamily: '"Source Sans Pro"',
                    fontWeight: 700,
                    lineHeight: '42px',
                  }}
                >
                  {member.name}
                </Typography>
                <Typography
                  sx={{
                    color: '#c2c2c2',
                    fontSize: '16px',
                    fontFamily: '"Source Sans Pro"',
                    fontWeight: 500,
                    lineHeight: '19px',
                  }}
                >
                  {member.role}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Footer onRoadmapClick={() => {}} />
    </Box>
  );
}