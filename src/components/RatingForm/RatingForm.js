import React,{ useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Modal from 'react-modal';
import {useAuth} from '../useAuth/useAuth';

Modal.setAppElement('#root')
const RatingForm = () => {
    const auth = useAuth();
    const [value, setValue] = useState(2);
    const [modalIsOpen, setModalIsOpen] = useState(true);
    

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const handleRating = () => {
        const ratingDetails = {
            name: auth.user.name,
            rating: value
        }
        fetch('https://quiet-earth-81393.herokuapp.com/rateUs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ratingDetails)
        })
            .then(res => res.json())
            .then(order => {
                console.log(order)
                closeModal()
            })
        
    }

    return (
        <div>
            <Modal 
                isOpen={modalIsOpen && auth.user.name} 
                onRequestClose={closeModal} 
                style={{
                    overlay:{
                        background: "rgba(211,211,211,0.5)"
                    },
                    content:{
                        height:'250px',
                        width: '400px',
                        textAlign: 'center',
                        borderRadius: '20px',
                        margin: 'auto'
                    }
                }} 
            >
                
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography component="legend">
                        <h1 className="text-danger">Rate Us</h1>
                    </Typography>
                    <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    />
                </Box>
                <button 
                    className="btn btn-danger" 
                    onClick={handleRating}
                >Rate Now
                </button>
            </Modal>    
        </div>
    );
};

export default RatingForm;