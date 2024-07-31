// src/pages/Home.js

import React from "react";
import { Container, Typography } from "@mui/material";
import Timeline from "../components/Timeline";
import Chatbot from "../components/Chatbot";

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to KYR Africa
      </Typography>
      <Typography variant="body1">
        Empowering citizens through knowledge and legal information.
      </Typography>
      <Timeline />
      <Chatbot />
    </Container>
  );
};

export default Home;
