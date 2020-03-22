import React from 'react';
import './Character.css';
import image1 from '../../resources/Image/adult-blur-blurred-background-687824.png';
import avatar1 from '../../resources/ICON/bus.png';
import image2 from '../../resources/Image/chef-cook-food-33614.png';
import avatar2 from '../../resources/ICON/notification.png';
import image3 from '../../resources/Image/architecture-building-city-2047397.png';
import avatar3 from '../../resources/ICON/car.png';

const Character = () => {
    return (
        <div className="container text-left character-block">
            <h2>Why Choose Us</h2>
            <p>Generating Random Text. A computer program can easily produce gibberish - especially if it has been provided with garbage beforehand. 
            </p>
            <div className="row">
            <div className="col-md-4">
                <div className="card" style={{width: '14rem'}}>
                    <img src={image1} className="card-img-top" alt="..."/>
                    <div className="card-body row">
                        <div className="col-3">
                            <img src={avatar1} alt=""/>
                        </div>
                        <div className="col-9">
                            <h6>Fast Delivery</h6>
                            <p className="card-text"><small>Some quick example text to build on the card title and make up the bulk of the card's content.</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
            <div className="card" style={{width: '14rem'}}>
                    <img src={image2} className="card-img-top" alt="..."/>
                    <div className="card-body row">
                        <div className="col-3">
                            <img src={avatar2} alt=""/>
                        </div>
                        <div className="col-9">
                            <h6>Good Responder</h6>
                            <p className="card-text"><small>Some quick example text to build on the card title and make up the bulk of the card's content.</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
            <div className="card" style={{width: '14rem'}}>
                    <img src={image3} className="card-img-top" alt="..."/>
                    <div className="card-body row">
                        <div className="col-3">
                            <img src={avatar3} alt=""/>
                        </div>
                        <div className="col-9">
                            <h6>Home Delivery</h6>
                            <p className="card-text"><small>Some quick example text to build on the card title and make up the bulk of the card's content.</small></p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Character;