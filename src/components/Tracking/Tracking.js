import React from 'react';
import map from '../../resources/ordercomplete.png';
import './Tracking.css';
import Rider from '../Rider/Rider';

const Tracking = () => {
    return (
        <div className="container tracking-page">
            <div className="row">
                <div className="col-md-8">
                    <img className="w-75" src={map} alt=""/>
                </div>
                <div className="col-md-4">
                    <Rider></Rider>
                </div>
            </div>
        </div>
    );
};

export default Tracking;