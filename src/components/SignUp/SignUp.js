import React, { useState } from 'react';
import Auth from '../useAuth/useAuth';

const SignUp = () => {
    const [userInfo,setuserInfo] = useState({
        name: '',
        email: '',
        password: '',
        confirmPass: ''
    });
    
    const auth = Auth();
    
    const handleSubmit = e => {
        auth.createUser(userInfo.name, userInfo.email, userInfo.password)
        e.preventDefault();
    }

    const handleChange = e => {
        setuserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                    value='Create Account'
                ></input>
            </form>
        </div>
    );
};

export default SignUp;