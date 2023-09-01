import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="40px" bgcolor="#333" color="#fff" paddingY="20px">
    <Stack gap="10px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="20px">
      <img src={Logo} alt="logo" style={{ width: '160px', height: '33px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold' }} mt="10px" textAlign="center" pb="10px">
      Built by: <span style={{ fontFamily: 'Georgia, serif', color: '#FFA500' }}>Chetan Batra</span>
    </Typography>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px', color: '#FFA500', fontSize: '20px' }}>
        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
      </a>
      <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" style={{ color: '#FFA500', fontSize: '20px' }}>
        <i className="fa fa-github" aria-hidden="true"></i>
      </a>
    </div>
  </Box>
);

export default Footer;
