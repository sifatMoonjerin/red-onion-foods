import React from 'react';
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    console.log('payment',error,paymentMethod)
  };

  return (
    <form style={{marginTop:'20px'}} onSubmit={handleSubmit}>
      <CardElement/>
      <button className="btn btn-danger address-btn" type="submit" disabled={!stripe || props.deactBtn}>
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;
