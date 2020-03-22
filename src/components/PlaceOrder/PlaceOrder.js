import React from 'react';
import Cart from '../Cart/Cart';
import Address from '../Address/Address';

const PlaceOrder = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <Address></Address>
                </div>
                <div className="col-md-4">
                    <Cart></Cart>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;