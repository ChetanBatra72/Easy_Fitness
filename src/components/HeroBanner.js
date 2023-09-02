import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/ban7.webp';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
   <Typography color="#FF2625" fontWeight="600" fontSize="56px"> Welcome to Fitness Club</Typography>
   <Typography
  fontWeight={900}
  sx={{
    fontSize: { lg: '56px', xs: '20px' }, // Increased font size
    lineHeight: '1.5', // Improved line height
    textAlign: 'left', // left text
    fontFamily:'roboto',
    color: "blue",

  }}
  mb="20px" // Reduced bottom margin for better alignment
  mt="30px"
>
   Sweat, Smile & Repeat💪
  {/* Unleash your potential with our personalized fitness programs.
  <br />
  Sweat, smile, and repeat as you embark on your journey
  <br />
  to a healthier, happier you. */}
</Typography>

    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
