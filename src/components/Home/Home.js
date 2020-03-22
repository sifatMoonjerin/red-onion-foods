import React from 'react';
import Menu from '../Menu/Menu';
import Search from '../Search/Search';
import Character from '../Character/Character';


const Home = () => {

    return (
        <div>
            <Search></Search>
            <Menu></Menu>
            <Character></Character>
        </div>
    );
};

export default Home;