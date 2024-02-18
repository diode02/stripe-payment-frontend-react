import { useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { InputContainer, StyledButton, StyledInput } from "./StyledComponents";

const PaymentAuthentication = () => {
  const stripe = useStripe();

  const [paymentMethodId, setPaymentMethodId] = useState("");

  useEffect(() => {
    if (paymentMethodId)
      localStorage.setItem("paymentMethodId", paymentMethodId);
  }, [paymentMethodId]);

  useEffect(() => {
    const paymentMethodId = localStorage.getItem("paymentMethodId");
    if (paymentMethodId) {
      setPaymentMethodId(paymentMethodId);
    }
  }, []);

  const handleAuthentication = async () => {
    if (!stripe) {
      console.log("Stripe.js has not loaded yet.");
      return;
    }

    const clientSecret = localStorage.getItem("paymentIntent");
    if (!clientSecret) {
      alert("Payment intent not found");
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: paymentMethodId, // Use the payment method ID from the PaymentMethod
      }
    );

    if (error) {
      console.error(`Payment confirmation error: ${error.message}`);
      // Handle errors here (e.g., display a message to the user)
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      console.log("Payment succeeded!");
      // Handle successful payment here (e.g., display a success message, update order status)
    }
  };

  return (
    <InputContainer>
      <h2>Payment Method need authentication</h2>
      <p>Payment Method (stripe payment method Id)</p>
      <StyledInput
        value={paymentMethodId}
        onChange={(e) => setPaymentMethodId(e.target.value)}
        placeholder="Enter Stripe Payment Method Id"
      />
      <StyledButton onClick={handleAuthentication}>Verify Payment</StyledButton>
    </InputContainer>
  );
};

export default PaymentAuthentication;
