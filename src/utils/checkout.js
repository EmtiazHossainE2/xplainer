import { loadStripe } from "@stripe/stripe-js";

export const checkout = async ({lineItems}) => {
  let stripePromise = null;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY);
    }
    return stripePromise;
  };

  const stripe = await getStripe();
  // console.log(stripe)

  await stripe.redirectToCheckout({
    mode: "payment",
    lineItems,
    successUrl: `https://xplainerr.vercel.app/dashboard`,
    cancelUrl: window.location.origin,
  });
}
