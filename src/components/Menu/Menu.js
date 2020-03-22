import React, { useState } from 'react';
import MenuBar from '../MenuBar/MenuBar';
import SubMenu from '../SubMenu/SubMenu';
import fakeData from '../../resources/fakeData';

const Menu = () => {
    const [curCategory, setCurCategory] = useState('lunch');
    const [curMenu, setCurMenu] = useState(fakeData.filter(item => {
            return item.type === curCategory
        }))

    const handleMenu = submenu => {
        setCurCategory(submenu);
        setCurMenu(fakeData.filter(item => {
            return item.type === submenu
        }))
    }

    return (
        <div>
            <MenuBar handleMenu={handleMenu}
                curCategory={curCategory}
            ></MenuBar>
            <SubMenu curMenu={curMenu}></SubMenu>
        </div>
    );
};

export default Menu;