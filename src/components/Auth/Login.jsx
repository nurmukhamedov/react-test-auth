import React, { useState } from 'react';
import firebase from '../../firebase';

import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Please enter email and password');
        } else {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password);
            } catch (error) {
                if (error.code === 'auth/user-not-found') {
                    setError('User not found. Please check your email address.');
                } else if (error.code === 'auth/wrong-password') {
                    setError('Invalid password. Please try again.');
                } else {
                    setError(error.message);
                }
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleLogin}>
                <label>
                    Email:<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Password:<input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="button" onClick={togglePasswordVisibility}>
                    {showPassword ? 'Hide password' : 'Show password'}
                </button>
                <br />
                <button type="submit">Login</button>
            </form>
            <span>You do not have an account?</span>
            <Link to="/register">Register</Link>
            <Link to="/forgotPassword">Forgot password</Link>
        </>
    );
};

export default Login;
