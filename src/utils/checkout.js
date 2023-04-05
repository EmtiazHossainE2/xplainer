import { loadStripe } from "@stripe/stripe-js";

export const checkout = async ({lineItems}) => {
  let stripePromise = null;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY, {
        apiVersion: "2022-11-15",
      });
    }
    return stripePromise;
  };

  const stripe = await getStripe();
  // console.log(stripe)

  await stripe.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: window.location.origin,
  });

  
}


// http://localhost:3000/?session_id=cs_test_a1IxzWkyQsbbKHOHKBRo5LqgWK9k1pTNeEMHgjyF5OZpMsGXs6TSre5O50