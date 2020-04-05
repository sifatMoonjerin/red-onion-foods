import React from 'react';
import fakeData from '../../resources/fakeData';

const Inventory = () => {
    const handleAddInventory = () => {
        const product = fakeData;
        console.log('posting....')
        fetch('http://localhost:4200/addProduct',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
          })
          .then(res => res.json())
          .then(data => {
              console.log('post successful');
          })
    }

    return (
        <div>
            <h1>This is inventory</h1>
            <button onClick={handleAddInventory}>Add Inventory</button>
        </div>
    );
};

export default Inventory;



//////////////////////////