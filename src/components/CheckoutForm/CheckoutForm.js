import React,{ useState } from 'react';
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = (props) => {
  const [paymentError, setPaymentError] = useState(null)
  const [paymentSuccess, setPaymentSuccess] = useState(null)

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if(error){
      setPaymentError(error.message)
      setPaymentSuccess(null)
    } else{
      setPaymentSuccess('Payment Successful')
      setPaymentError(null)
    }
  };

  return (
    <form style={{marginTop:'20px'}} onSubmit={handleSubmit}>
      <CardElement/>
      { paymentError && <p style={{color: 'red'}}>{paymentError}</p>}
      { paymentSuccess && <p style={{color: 'green'}}>{paymentSuccess}</p>}
      <button className="btn btn-danger address-btn" type="submit" disabled={!stripe || props.deactBtn}>
        Place Order
      </button>
      
    </form>
  );
};

export default CheckoutForm;
