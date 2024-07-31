// src/pages/Contact.js

import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

const Contact = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" gutterBottom>
        Get in touch with our team for any inquiries.
      </Typography>
      <form>
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Message" fullWidth multiline rows={4} margin="normal" />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
    </Container>
  );
};

export default Contact;
