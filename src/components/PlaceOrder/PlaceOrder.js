import React from 'react';
import Cart from '../Cart/Cart';
import Address from '../Address/Address';

const PlaceOrder = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <Address></Address>
                </div>
                <div className="col-md-5">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;