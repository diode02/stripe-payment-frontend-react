// Payment.js
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { InputContainer, StyledButton } from "./StyledComponents";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();

  const cardStyle = {
    style: {
      base: {
        fontSize: "16px",
        color: "#424770",
        "::placeholder": {
          color: "#aab7c4",
        },
      },
      invalid: {
        color: "#9e2146",
      },
    },
  };

  const handlePayment = async () => {
    const clientSecret = localStorage.getItem("paymentIntent");
    if (!clientSecret) {
      alert("Payment intent not found");
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.error(result.error);
      alert("Payment failed", result.error.message);
    } else {
      // Payment succeeded
      alert("Payment succeeded");
    }
  };

  return (
    <InputContainer>
      <CardElement options={cardStyle} />
      <StyledButton onClick={handlePayment}>Pay</StyledButton>
    </InputContainer>
  );
};

export default Payment;
