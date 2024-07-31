// src/components/Navbar.js

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          KYR Africa
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about">
          About
        </Button>
        <Button color="inherit" component={Link} to="/timeline">
          Timeline
        </Button>
        <Button color="inherit" component={Link} to="/chatbot">
          Chatbot
        </Button>
        <Button color="inherit" component={Link} to="/legal-qna">
          Legal Q&A
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          Contact
        </Button>
        <Button color="inherit" component={Link} to="/payment">
          Payment
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
