import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './ItemDetail.css';

const ItemDetail = (props) => {
    const  [quantity,setQuantity] = useState(1);

    const handleQuantity = sign => {
        const curQuantity = quantity;
        let newQuantity;
        if(sign === '+'){
            newQuantity = curQuantity + 1;
        }else{
            newQuantity = curQuantity>1? curQuantity-1 : curQuantity;
        }
        setQuantity(newQuantity);
    }

    return (
        <div className='container item-detail'>
            <div className="row">
                <div className="col-md-5 item-description">
                    <h3 className="text-center">{props.item.title}</h3>
                    <p>{props.item.description}</p>
                    <div className="row">
                        <h3 className="col-4">
                            ${(props.item.price*quantity).toFixed(2)}
                        </h3>
                        <div className="col-6 counter">
                            <button className='minus-btn' 
                                onClick={()=>handleQuantity('-')}
                            >-</button>
                            <input className='counter-field' 
                                type='text' 
                                value={quantity} 
                                disabled
                            ></input>
                            <button className='plus-btn'
                                onClick={()=>handleQuantity('+')}
                            >+</button>
                        </div>
                    </div>
                    <br/>
                    <button className="btn btn-danger"
                        onClick={()=>props.handleCart(props.item,quantity)}
                    ><FontAwesomeIcon icon={ faShoppingCart } /> Add</button>
                </div>
                <div className="col-md-7">
                    <img className="w-100" src={props.item.image} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;