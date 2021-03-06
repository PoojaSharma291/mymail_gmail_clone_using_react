import { Button } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth, provider } from './firebase';
import "./Login.css";

function Login() {
    const dispatch = useDispatch();
    const signin = () => {
        auth.signInWithPopup(provider).then(({ user }) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))
        })
            .catch((error) => alert(error.message));
    };
    return (
        <div className="login">
            <div className="loginContainer">
                <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt=""
                />
                <Button color="primary" variant="contained" onClick={signin} > Login</Button>
            </div>
        </div>
    )
}

export default Login;
