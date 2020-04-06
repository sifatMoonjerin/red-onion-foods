import React from 'react';
import Item from '../Item/Item';
import './SubMenu.css';
import { Link } from 'react-router-dom';

const SubMenu = (props) => {
    
    return (
        <div className="container">
            <div className="row">
                {   
                    props.curMenu.map(item => {
                        return <Item key ={item._id}
                                    item={item}
                                    handleItem={props.handleItem}
                                ></Item>
                    })
                }
            </div>
            <br/>
            <Link to='/signup'>
                <button className="btn btn-danger"
                    disabled={props.emptyCart}
                    onClick={props.handleOrder}
                >Checkout Your Food</button>
            </Link>
        </div>
    );
};

export default SubMenu;