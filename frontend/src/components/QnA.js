// src/components/QnA.js

import React, { useState } from "react";
import { Container, Typography, TextField, Button, List, ListItem, ListItemText } from "@mui/material";

const QnA = () => {
  const [question, setQuestion] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleAskQuestion = () => {
    // Placeholder for question handling logic
    setQuestions([...questions, question]);
    setQuestion("");
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Legal Q&A
      </Typography>
      <TextField
        label="Ask a legal question"
        fullWidth
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAskQuestion} sx={{ marginTop: '10px' }}>
        Ask
      </Button>
      <List>
        {questions.map((q, index) => (
          <ListItem key={index}>
            <ListItemText primary={q} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default QnA;
