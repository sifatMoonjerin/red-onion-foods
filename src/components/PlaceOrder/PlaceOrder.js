import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Address from '../Address/Address';
// import CheckoutForm from '../CheckoutForm/CheckoutForm';
// import {loadStripe} from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';

const PlaceOrder = () => {

    // const stripePromise = loadStripe('pk_test_FSxHFs4lKjG8a5L5xO854nWX00IRAYqpqT');

    const [formComplete, setFormComplete] = useState(false);
    const [deliveryDetails, setDeliveryDetails] = useState({});

    const handleForm = e => {
        const details = {
            name: e.target.name.value,
            email: e.target.email.value,
            address: e.target.address.value,
            city: e.target.city.value
        }
        
        setDeliveryDetails(details);
        setFormComplete(true);

        e.preventDefault();
    } 

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <Address handleForm={handleForm}
                        formComplete={formComplete} >
                    </Address>
                </div>
                <div className="col-md-5">
                    <Cart formComplete={formComplete} 
                        deliveryDetails={deliveryDetails}
                    ></Cart>
                </div>
            </div>
            
        </div>
    );
};

export default PlaceOrder;