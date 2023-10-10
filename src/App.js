// App.js
import StripeWrapper from "./components/StripeWrapper";
import Payment from "./components/Payment";
import AuthTokenInput from "./components/AuthTokenInput";
import { Container } from "./components/StyledComponents";
import PaymentIntent from "./components/PaymentIntentToken";

function App() {
  return (
    <Container>
      <StripeWrapper>
        <AuthTokenInput />
        <PaymentIntent />
        <Payment />
        {/* Add other components/screens as needed */}
      </StripeWrapper>
    </Container>
  );
}

export default App;
