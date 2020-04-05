import React from 'react';
import fakeData from '../../resources/fakeData';

const Inventory = () => {
    const handleAddInventory = () => {
        const menu = fakeData;
        console.log('posting....')
        console.log(menu)
        // fetch('https://quiet-earth-81393.herokuapp.com/addMenu',{
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(menu)
        //   })
        //   .then(res => res.json())
        //   .then(data => {
        //       console.log('post successful');
        //   })
    }

    return (
        <div>
            <h1>This is inventory</h1>
            <button onClick={handleAddInventory}>Add Items</button>
        </div>
    );
};

export default Inventory;



//////////////////////////