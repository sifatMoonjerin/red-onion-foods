import React, { useState } from 'react';
import MenuBar from '../MenuBar/MenuBar';
import SubMenu from '../SubMenu/SubMenu';
import fakeData from '../../resources/fakeData';
import ItemDetail from '../ItemDetail/ItemDetail';

const Menu = () => {
    const [curCategory, setCurCategory] = useState('lunch');
    const [curMenu, setCurMenu] = useState(fakeData.filter(item => {
            return item.type === curCategory
        }));
    const [curItem, setCurItem] = useState(null);
    const [cart, setCart] = useState(
        sessionStorage.getItem('cart')?JSON.parse(sessionStorage.getItem('cart')):[]
    );

    const handleMenu = submenu => {
        setCurCategory(submenu);
        setCurMenu(fakeData.filter(item => {
            return item.type === submenu
        }))
        setCurItem(null)
    }

    const handleItem = item => {
        setCurItem(item);
        setCurCategory('');
    }

    const handleCart = (item,quantity) => {
        const newCart = cart.filter(el => el.title !== item.title);
        
        setCart([...newCart, {
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