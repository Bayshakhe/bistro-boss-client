import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";

const CheckoutForm = ({price}) => {
  const stripe = useStripe();
  const elements = useElements();
  const {user} = useAuth()
  const [axiosSecure] = useAxiosSecure()
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState('')
  // console.log(price)

  useEffect(()=>{
    axiosSecure.post('/create-payment-intend', {price})
    .then(res => {
      console.log(res.data.clientSecret)
      setClientSecret(res.data.clientSecret)
    })
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card
    });
    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setCardError("");
    }

    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'unknown',
            email: user?.email || 'unknown'
          }
        }
      }
    )
    if(confirmError){
      console.log(confirmError)
    }
    console.log(paymentIntent)
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-2/3 mx-auto">
        <CardElement
          options={{
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
          }}
        />
        <button
          className="btn btn-sm mt-5 px-5"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 w-2/3 mx-auto mt-5">{cardError}</p>}
    </div>
  );
};

export default CheckoutForm;
