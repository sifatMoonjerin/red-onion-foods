import React from 'react';
import './Item.css';

const Item = (props) => {
    return (
        <div className="col-lg-4">
            <div onClick={()=>props.handleItem(props.item)} className="card">
                <img src={props.item.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h6>{props.item.title}</h6>
                    <p className="text-muted">{props.item.phrase}</p>
                    <h5>${props.item.price}</h5>
                </div>
            </div>
        </div>
    );
};

export default Item;