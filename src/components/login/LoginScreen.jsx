import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';

import '../../app.css';

const LoginScreen = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className='signin-body'>
            <div className='form-signin'>
                <img className="mb-4" src="https://vitejs.dev/logo.svg" alt="" width="100vw" />
                <h1>Welcome back</h1>
                <hr />

                <button
                    className='btn btn-primary'
                    onClick={loginWithRedirect}
                >
                    Login
                </button>
            </div>
        </div>
    )
}

export default LoginScreen