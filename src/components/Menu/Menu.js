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
    const [emptyCart, setEmptyCart] = useState(!sessionStorage.getItem('cart'));

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
        const getTestCart = sessionStorage.getItem('cart');
        const testCart = getTestCart? JSON.parse(getTestCart): [];
        console.log(testCart);
        //const newCart = cart.filter(el => el.title !== item.title);
        const testNewCart = testCart.filter(el => el.title !== item.title);
        // setCart([...newCart, {
        //     title: item.title,
        //     image: item.image,
        //     quantity: quantity
        // }])

        const testUpdateCart = [...testNewCart, {
            title: item.title,
            image: item.image,
            quantity: quantity
        }]
        
        sessionStorage.setItem('cart',JSON.stringify(testUpdateCart))
        setCurItem(null)
        setEmptyCart(false)
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
                        emptyCart={!emptyCart}
                    ></SubMenu>
            }
            
        </div>
    );
};

export default Menu;