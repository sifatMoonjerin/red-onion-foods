import React from 'react';
import Menu from '../Menu/Menu';
import Search from '../Search/Search';
import Character from '../Character/Character';
import FooterBlock from '../FooterBlock/FooterBlock';


const Home = () => {

    return (
        <div>
            <Search></Search>
            <Menu></Menu>
            <Character></Character>
            <FooterBlock></FooterBlock>
        </div>
    );
};

export default Home;