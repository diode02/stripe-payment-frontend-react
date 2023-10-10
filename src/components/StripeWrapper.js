// StripeWrapper.js
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const publicKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

const stripePromise = loadStripe(publicKey);

const StripeWrapper = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeWrapper;
