import React from 'react';
import './MenuBar.css';

const MenuBar = (props) => {
    return (
        <div>
            <button onClick={()=>props.handleMenu('breakfast')} 
                className={`menu-toggle 
                ${props.curCategory === 'breakfast'?'text-danger':''}`}
            >Breakfast</button>
            <button onClick={()=>props.handleMenu('lunch')} 
                className={`menu-toggle 
                ${props.curCategory === 'lunch'?'text-danger':''}`}
            >Lunch</button>
            <button onClick={()=>props.handleMenu('dinner')} 
                className={`menu-toggle 
                ${props.curCategory === 'dinner'?'text-danger':''}`}
            >Dinner</button>
        </div>
    );
};

export default MenuBar;