import React from 'react';
import Item from '../Item/Item';
import './SubMenu.css';

const SubMenu = (props) => {
    return (
        <div className="container">
            <div className="row">
                {
                    props.curMenu.map(item => <Item item={item}></Item>)
                }
            </div>
        </div>
    );
};

export default SubMenu;