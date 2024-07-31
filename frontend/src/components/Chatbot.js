// src/components/Chatbot.js

import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper } from "@mui/material";

const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [responses, setResponses] = useState([]);

  const handleSendMessage = () => {
    // Placeholder for chatbot response logic
    setResponses([...responses, { type: "user", text: message }, { type: "bot", text: "This is a mock response" }]);
    setMessage("");
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Chatbot
      </Typography>
      <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px' }}>
        {responses.map((res, index) => (
          <Typography key={index} align={res.type === "user" ? "right" : "left"}>
            {res.text}
          </Typography>
        ))}
      </Paper>
      <TextField
        label="Type a message"
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSendMessage} sx={{ marginTop: '10px' }}>
        Send
      </Button>
    </Container>
  );
};

export default Chatbot;
