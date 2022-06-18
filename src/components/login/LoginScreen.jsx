import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';

import { types } from "../../types/types"

const LoginScreen = () => {

    const context = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        const action = {
            type: types.login,
            payload: { name: 'Juan' }
        }

        context.dispatch(action);

        const lastPath = localStorage.getItem('lastPath') || '/';

        navigate(lastPath, {
            replace: true
        });
    }

    return (
        <div className='container mt-5'>
            <h1>Login</h1>
            <hr/>

            <button
                className='btn btn-primary'
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}

export default LoginScreen