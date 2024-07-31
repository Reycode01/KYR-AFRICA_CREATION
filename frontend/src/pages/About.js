// src/pages/About.js

import React from "react";
import { Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        KYR Africa is dedicated to providing legal information and resources to empower citizens.
      </Typography>
      {/* Add more about content here */}
    </Container>
  );
};

export default About;
