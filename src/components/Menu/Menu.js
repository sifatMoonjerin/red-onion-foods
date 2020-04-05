import React, { useState, useEffect } from 'react';
import MenuBar from '../MenuBar/MenuBar';
import SubMenu from '../SubMenu/SubMenu';
//import fakeData from '../../resources/fakeData';
import ItemDetail from '../ItemDetail/ItemDetail';

const Menu = () => {
    const [curCategory, setCurCategory] = useState('lunch');
    const [curMenu, setCurMenu] = useState([]);
    const [curItem, setCurItem] = useState(null);
    const [cart, setCart] = useState(
        sessionStorage.getItem('cart')?JSON.parse(sessionStorage.getItem('cart')):[]
    );

    useEffect(()=>{
        if(curCategory !== ''){
            fetch('https://quiet-earth-81393.herokuapp.com/items/'+curCategory)
            .then(res => res.json())
            .then(data => {
                setCurMenu(data);
            })
        }
    },[curCategory])

    const handleMenu = submenu => {
        setCurCategory(submenu);
        setCurItem(null)
    }

    const handleItem = item => {
        setCurItem(item);
        setCurCategory('');
    }

    const handleCart = (item,quantity) => {
        const newCart = cart.filter(el => el.id !== item._id);
        
        setCart([...newCart, {
            id: item._id,
            title: item.title,
            image: item.image,
            price: item.price,
            quantity: quantity
        }])
        setCurItem(null)
        setCurCategory(item.type);
    }

    const handleOrder = ()=>{
        sessionStorage.setItem('cart',JSON.stringify(cart))
    }

    return (
        <div>
            <MenuBar handleMenu={handleMenu}
                curCategory={curCategory}
            ></MenuBar>
            {
                curItem? 
                    <ItemDetail item={curItem}
                        handleCart={handleCart}
                    ></ItemDetail> :
                    <SubMenu curMenu={curMenu}
                        handleItem={handleItem}
                        handleOrder={handleOrder}
                        emptyCart={!cart.length}
                    ></SubMenu>
            }
            
        </div>
    );
};

export default Menu;