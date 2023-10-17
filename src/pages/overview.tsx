import { Box, Button, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
  title: 'Welcome to DePunkz',
  content: 'An innovative and exclusive community dwelling in the heart of a dystopian, cyberpunk-inspired society. We thrive in chaos, revel in the unconventional, and embrace the very essence of a world teetering on the edge of the future. DePunkz is not just a project; it\'s a way of life, a movement, and an evolution of creative and financial empowerment.'
}, {
  title: 'The World We Navigate',
  content: 'In our cyberpunk-inspired universe, society is a thrilling amalgamation of high-tech marvels, neon-lit streets, and untamed innovation. Here, we focus on quality art, branding, and gaming.'
}, {
  title: 'Our Vision',
  content: 'DePunkz embodies a clear and audacious vision – to pioneer groundbreaking ways of delivering value, bolstering the Cardano ecosystem, and empowering our members. We are a dynamic collective of builders, who focus on building a strong community, quality art, brand name and soon a place for game, so called NEOHUB. NEOHUB won\'t be just a place for gamers, it will be a platform where people can list their games and also ask for game development services.'
}].map((section, index) => (
  <Box key={index} mb={4} px={{ xs: 2, md: 0 }}>  {/* Added padding here */}
    <Typography
      variant="h2"
      sx={{
        color: '#ffffff',
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
        flexWrap={{ xs: 'wrap', md: 'nowrap' }}  // Changed sm to md
    >
        {[{ name: 'Neopunk', role: 'Founder' }, { name: 'Mongo', role: 'Co-Founder' }, { name: 'Hero', role: 'Game Developer' }, { name: 'Gussano', role: 'Artist' }].map((member) => (
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
                    width: { xs: 'calc(100% - 16px)', md: '250px' },  // Changed sm to md
                    height: '325px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    position: 'relative',
                    pb: 2,
                    mb: { xs: 2, md: 0 },  // Changed sm to md
                }}
            >
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