// src/components/Footer.js

import React from "react";
import { Typography, Container, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', padding: '20px 0' }}>
      <Container>
        <Typography variant="body1" align="center">
          © 2024 KYR Africa. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
