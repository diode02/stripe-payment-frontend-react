// Payment.js
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { InputContainer, StyledButton } from "./StyledComponents";

const AddPaymentMethod = () => {
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

    const result = await stripe.confirmCardSetup(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      console.error(result);
      alert("Payment Method addition failed", result.error.message);
    } else {
      // Payment succeeded
      alert("Payment Method Added");
    }
  };

  return (
    <InputContainer>
    <h3>Add Payment Method</h3>
      <CardElement options={cardStyle} />
      <StyledButton onClick={handlePayment}>Add</StyledButton>
    </InputContainer>
  );
};

export default AddPaymentMethod;
