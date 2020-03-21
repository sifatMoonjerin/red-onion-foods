import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

firebase.initializeApp(firebaseConfig);

const useAuth = () => {
    return (
        <div>
            
        </div>
    );
};

export default useAuth;