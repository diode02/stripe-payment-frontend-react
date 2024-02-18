// App.js
import AddPaymentMethod from "./components/AddPaymentMethod";
import AuthTokenInput from "./components/AuthTokenInput";
import Payment from "./components/Payment";
import PaymentIntent from "./components/PaymentIntentToken";
import StripeWrapper from "./components/StripeWrapper";
import { Container } from "./components/StyledComponents";

import React, { useState } from "react";
// import AuthenticatePaymentMethod from "./components/AuthenticatePaymentMethod";
import PaymentAuthentication from "./components/PaymentAuthentication";
// ... other imports ...

function App() {
  const [showPayment, setShowPayment] = useState(true); // Add state to toggle between components

  return (
    <Container>
      <StripeWrapper>
        <AuthTokenInput />
        <PaymentIntent />
        {showPayment ? <Payment /> : <AddPaymentMethod />}
        <button onClick={() => setShowPayment(!showPayment)}>
          {showPayment ? "Switch to Add Payment Method" : "Switch to Payment"}
        </button>

        <PaymentAuthentication />
      </StripeWrapper>
    </Container>
  );
}

export default App;
