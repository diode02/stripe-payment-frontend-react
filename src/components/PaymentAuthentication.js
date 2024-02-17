import React from "react";
import { useStripe } from "@stripe/react-stripe-js";

const PaymentAuthentication = ({ clientSecret }) => {
  const stripe = useStripe();

  const handleAuthentication = async () => {
    if (!stripe) {
      console.log("Stripe.js has not loaded yet.");
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: "", // Use the payment method ID from the PaymentMethod
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
    <div>
      <h2>Your payment requires additional verification</h2>
      <button onClick={handleAuthentication}>Verify Payment</button>
    </div>
  );
};

export default PaymentAuthentication;
