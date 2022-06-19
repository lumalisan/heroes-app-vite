import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

const LoginScreen = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr/>

            <button
                className='btn btn-primary'
                onClick={loginWithRedirect}
            >
                Login
            </button>
        </div>
    )
}

export default LoginScreen