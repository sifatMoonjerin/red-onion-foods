import React, { useState, useEffect } from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Cart = (props) => {
    const stripePromise = loadStripe('pk_test_FSxHFs4lKjG8a5L5xO854nWX00IRAYqpqT');

    const [showPrice, setShowPrice] = useState(true)
    const [cart, setCart] = useState([]);
    
    useEffect(()=>{
        const curCart = JSON.parse(sessionStorage.getItem('cart'));
        if(curCart){
            setCart(curCart)
        }
    },[])
    
    const handleCart = item => {
        const newCart = cart.filter(el=> el.title !== item.title)
        setCart(newCart);
        sessionStorage.setItem('cart',JSON.stringify(newCart))
    }


    const emptyCart = () => {
        setShowPrice(false)
        setCart([])
    }

    return (
        <div className='text-left cart-block'>
            <small>From: <span>Gulistan, Dhaka</span></small>
            <br/>
            <small>Arriving in 20-30 minutes</small>
            {
                showPrice && <div>
                    <div>Total: <strong>${cart?
                        (cart.reduce((a,b)=>a+(b.price*b.quantity),0)).toFixed(2):
                        '0.00'}</strong>
                    </div>
                </div>
            }
            {
               cart? cart.map(item => {
                    return <CartItem key={item.id} item={item} handleCart={handleCart}></CartItem>
                }): ''
            } 
            <Elements stripe={stripePromise}>
                <CheckoutForm deactBtn={!props.formComplete || !cart.length}
                    deliveryDetails={props.deliveryDetails}
                    cart={cart}
                    emptyCart={emptyCart}/>
            </Elements>
            
            
        </div>
    );
};

export default Cart;