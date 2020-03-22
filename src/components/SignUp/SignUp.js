import React, { useState } from 'react';
import Auth from '../useAuth/useAuth';
import './SignUp.css';
import logo from '../../resources/logo2.png';

const SignUp = () => {
    const [userInfo,setuserInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmPass: ''
    });
    const [newUser, setNewUser] = useState(true)
    
    const auth = Auth();
    
    const handleSubmit = e => {
        if(e.target.password.value === e.target.confirmPass.value){
            auth.createUser(userInfo.name, userInfo.email, userInfo.password);
        }else{
            alert('Password did not match.');
        }
        e.preventDefault();
    }

    const handleSignIn = e => {
        auth.signInUser(userInfo.email, userInfo.password);
        e.preventDefault();
    }

    const handleChange = e => {
        setuserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className="signup-page">
            <img src={logo} alt=''></img>
            {!auth.user && newUser && <form onSubmit={handleSubmit}>
                <input type='text' 
                    name="name" 
                    value={userInfo.name}
                    placeholder='Name'
                    onChange={handleChange}
                    required
                ></input>
                <br/>
                <input type='text' 
                    name="email"
                    value={userInfo.email} 
                    placeholder='Email'
                    onChange={handleChange}
                    required
                ></input>
                <br/>
                <input type='password'
                    name="password" 
                    value={userInfo.password} 
                    placeholder='Password'
                    onChange={handleChange}
                    required
                ></input>
                <br/>
                <input type='password' 
                    name="confirmPass"
                    value={userInfo.confirmPass} 
                    placeholder='Confirm Password'
                    onChange={handleChange}
                    required
                ></input>
                <br/>
                <input type='submit' 
                    className="btn btn-success" 
                    value='Sign Up'
                ></input>
                
            </form>
            } 

            {
                !auth.user && !newUser && <form onSubmit={handleSignIn}>
                    <input type='text' 
                    name="email"
                    value={userInfo.email} 
                    placeholder='Email'
                    onChange={handleChange}
                    required
                ></input>
                <br/>
                <input type='password'
                    name="password" 
                    value={userInfo.password} 
                    placeholder='Password'
                    onChange={handleChange}
                    required
                ></input>
                <br/>
                <input type='submit' 
                    className="btn btn-success" 
                    value='Log In'
                ></input>
                </form>                
            }  
            {!auth.user && newUser && <button className="btn btn-danger" onClick={()=>setNewUser(false)}>Existing User</button>}
            
            {!auth.user && !newUser && <button className="btn btn-danger" onClick={()=>setNewUser(true)}>Create Account</button> }    
            <br/>
            {
                auth.user && <a className="btn btn-danger" href="/order">Place Order</a>
            }
            
            
        </div>
    );
};

export default SignUp;