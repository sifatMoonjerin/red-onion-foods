import React from 'react';
import Item from '../Item/Item';
import './SubMenu.css';

const SubMenu = (props) => {
    return (
        <div className="container">
            <div className="row">
                {
                    props.curMenu.map(item => {
                        return <Item item={item}
                                    handleItem={props.handleItem}
                                ></Item>
                    })
                }
            </div>
            <button className="btn btn-danger"
                disabled={!props.emptyCart}
            >ok</button>
        </div>
    );
};

export default SubMenu;