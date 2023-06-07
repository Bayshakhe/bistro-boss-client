import React from "react";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk);

const Payment = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
//   console.log(price);
  return (
    <div className="w-full">
      <SectionTitle
        subHeading={"Please Process"}
        heading={"Payment"}
      ></SectionTitle>
      {price && (
        <Elements stripe={stripePromise}>
          <CheckoutForm refetch={refetch} cart={cart} price={price}></CheckoutForm>
        </Elements>
      )}
    </div>
  );
};

export default Payment;
