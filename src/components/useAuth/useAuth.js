import React, { useState, createContext, useContext, useEffect } from "react";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";
import { Redirect, Route } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const AuthContext = createContext();

export const AuthContextProvider = props => {
  const auth = Auth();
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signup",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

const getUser = usr => {
  const { displayName, email } = usr;
  return { name: displayName, email };
};

const Auth = () => {
  const [user, setUser] = useState({
      name:'',
      email:''
  });

  const createUser = async (name, email, password) => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      await firebase.auth().currentUser.updateProfile({
        displayName: name
      });
      const curUser = firebase.auth().currentUser;
      setUser({
        name: curUser.displayName,
        email: curUser.email
      });
      alert('Thank You For Signing Up')
    } catch (error) {
      alert(error.message);
    }
  };

  const signInUser = (email,password) => {

      firebase.auth().signInWithEmailAndPassword(email,password)
      .then(res => {
        
        setUser({
            name: res.user.displayName,
            email: res.user.email
        });
        
      })
      .catch(err => {
        alert(err.message);
      })
    };

    const signInWithGoogle = () => {
    
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(res => {
        setUser({
          name: res.user.displayName,
          email: res.user.email
      });
        
      })
      .catch(err => {
        alert(err.message);
      });
  };

  const signOut = () => {
    firebase.auth().signOut()
    .then(()=>{
        setUser(null);
    })
    .catch (error => {
        console.log(error.message);
    })
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(function(usr) {
      if (usr) {
        const currentUser = getUser(usr);
        setUser(currentUser);
      } else {
        // No user is signed in.
      }
    });
  }, []);

  return {
    user,
    createUser,
    signInUser,
    signInWithGoogle,
    signOut
  };
};

export default Auth;
