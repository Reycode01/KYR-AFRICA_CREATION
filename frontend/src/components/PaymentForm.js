// src/components/PaymentForm.js

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { Container, Typography, Button, CircularProgress } from "@mui/material";

// Load Stripe with your publishable key
const stripePromise = loadStripe("your-publishable-key-here");

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    // Create a payment intent on the server
    const { data: clientSecret } = await axios.post("http://localhost:4000/create-payment-intent", {
      amount: 5000, // Amount in cents
    });

    // Confirm the payment
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      setMessage(result.error.message);
    } else if (result.paymentIntent.status === "succeeded") {
      setMessage("Payment successful!");
    }

    setLoading(false);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Payment Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <Button variant="contained" color="primary" type="submit" disabled={!stripe || loading}>
          {loading ? <CircularProgress size={24} /> : "Pay $50"}
        </Button>
      </form>
      {message && <Typography variant="body1">{message}</Typography>}
    </Container>
  );
};

const PaymentForm = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default PaymentForm;

