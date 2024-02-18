// Payment.js
import { useStripe } from "@stripe/react-stripe-js";
import { StyledButton } from "./StyledComponents";

const AuthenticatePaymentMethod = () => {
  const stripe = useStripe();

  const handlePayment = async () => {
    const clientSecret = localStorage.getItem("paymentIntent");
    if (!clientSecret) {
      alert("Payment intent not found");
      return;
    }

    const result = await stripe.confirmPayment({
      clientSecret,
      confirmOptions: {
        payment_method: "pm_1OkXblAzlYto0TMqPgo9gvI4",
      },
      // returnUrl: window.location.href,
      redirect: "if_required",
    });

    if (result.error) {
      console.error(result);
      alert("Payment Method Authentication failed", result.error.message);
    } else {
      // Payment succeeded
      alert("Payment Method Authentication succeeded");
    }
  };

  return (
    <StyledButton onClick={handlePayment}>
      AuthenticatePaymentMethod
    </StyledButton>
  );
};

export default AuthenticatePaymentMethod;
