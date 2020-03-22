import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Address from '../Address/Address';

const PlaceOrder = () => {

    const [formComplete, setFormComplete] = useState(false);

    const handleForm = e => {
        setFormComplete(true)
        e.preventDefault();
    } 

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <Address handleForm={handleForm}></Address>
                </div>
                <div className="col-md-5">
                    <Cart formComplete={formComplete}></Cart>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;