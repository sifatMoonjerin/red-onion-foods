import React from 'react';
import fakeData from '../../resources/fakeData';

const Home = () => {
    
    return (
        <div>
            <h2>this is home</h2>
            {
                fakeData.map(el => {
                    return (
                        <div>
                            <p>{el.title}</p>
                            <p>{el.type}</p>
                            <img src={el.image} alt="sfd"></img>
                        </div>
                        
                    ) 
                })
            }
            
        </div>
    );
};

export default Home;