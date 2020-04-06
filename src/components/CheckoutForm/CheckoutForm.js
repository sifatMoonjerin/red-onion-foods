import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = (props) => {
  const CARD_STYLES = {
    style: {
      base: {
        fontSize: '18px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    }
  }

  const [paymentError, setPaymentError] = useState(null)
  const [paymentSuccess, setPaymentSuccess] = useState(null)
  const [orderId, setOrderId] = useState('')

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
      const orderDetails = {
        ...props.deliveryDetails,
        order: props.cart,
        paymentId: paymentMethod.id,
        last4: paymentMethod.card.last4
      }
      fetch('https://quiet-earth-81393.herokuapp.com/placeOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(order => {
                setOrderId(order._id)
                setPaymentSuccess('Payment Successful')
                setPaymentError(null)
                props.emptyCart()
                sessionStorage.clear()
            })
    }
  };

  return (
    <form style={{marginTop:'20px'}} onSubmit={handleSubmit}>
      <h6 className="text-danger">Card Details</h6>
      <CardElement options={CARD_STYLES} />
      { paymentError && <p style={{color: 'red'}}>{paymentError}</p>}
      { !paymentSuccess && <button className="btn btn-danger address-btn" type="submit" disabled={!stripe || props.deactBtn}>
        Place Order
      </button>}
      { 
        paymentSuccess && <div>
          <h5 style={{color: 'green'}}>{paymentSuccess}</h5>
          <p>Order ID: {orderId}</p>
          <Link to='/tracking'>
                <button className="btn btn-danger">Track Order</button>
          </Link>
        </div>
      }
      
    </form>
  );
};

export default CheckoutForm;
