import React, { useState } from 'react';
import firebase from '../../firebase';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            await firebase.auth().sendPasswordResetEmail(email);
            setMessage('Password reset email sent. Please check your inbox.');
            setError(null);
        } catch (error) {
            setError(error.message);
            setMessage(null);
        }
    };

    return (
        <>
            <h2>Reset Password</h2>
            {error && <p>{error}</p>}
            {message && <p>{message}</p>}
            <form onSubmit={handleResetPassword}>
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Reset Password</button>
            </form>
        </>
    );
};

export default ForgotPassword;