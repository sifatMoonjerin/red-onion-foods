import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Modal from 'react-modal';

Modal.setAppElement('#root')
const RatingForm = () => {
    const [value, setValue] = React.useState(2);
    const [modalIsOpen, setModalIsOpen] = React.useState(true);

    const closeModal = () => {
        setModalIsOpen(false)
    }

    const handleRating = () => {
        closeModal()
    }

    return (
        <div>
            <Modal 
                isOpen={modalIsOpen} 
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