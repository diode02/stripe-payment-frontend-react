// Payment.js
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
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
    const { data: clientSecret } = await axios.get("/path/to/your/backend/payment-intent");

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      }
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      // Payment succeeded
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
