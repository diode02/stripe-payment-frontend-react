// StripeWrapper.js
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const publicKey = localStorage.getItem("publicTestKey");

const stripePromise = loadStripe(publicKey);

const StripeWrapper = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeWrapper;
