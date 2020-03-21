import React, { useState } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

firebase.initializeApp(firebaseConfig);

const Auth = () => {
    const [user, setUser] = useState(null)

    const createUser = async (name, email, password) => {
        try{
            await firebase.auth().createUserWithEmailAndPassword(email, password);
            await firebase.auth().currentUser.updateProfile({
                displayName: name
            })
            const curUser = firebase.auth().currentUser;
            setUser({
                name: curUser.displayName,
                email: curUser.email
            })
        }
        catch(error){
            console.log(error.message)
        }
        
    }

    return {
        user,
        createUser
    }
    
};

export default Auth;