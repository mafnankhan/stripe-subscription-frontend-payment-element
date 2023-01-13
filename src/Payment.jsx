import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

function Payment() {
  const [product, setProduct] = useState(null);
  const [clientSecret, setClientSecret] = useState(null);

  const onChange = (e) => setProduct(e.target.value)

  useEffect(() => {
    if (product) {
      axios.post('/charge-customer', {
        price: product
      })
      .then(({ data }) => {
        const { clientSecret } = data
        setClientSecret(clientSecret)
      })
    }
  }, [product])

  return (
    <>
      <h1>React Stripe and the Payment Element</h1>

      <select onChange={onChange}>
        <option >-- Select Product --</option>
        <option value="price_1MMAiKLmMXaRzghnTBNn44XW">Monthly</option>
        <option value="price_1MMAisLmMXaRzghnXJKxF8UG">Yearly</option>
      </select>

      {clientSecret && (
        <Elements stripe={loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  )
}

export default Payment;