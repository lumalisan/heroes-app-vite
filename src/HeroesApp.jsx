import React from 'react'
import { Auth0Provider } from "@auth0/auth0-react"
import AppRouter from './routers/AppRouter'

const HeroesApp = () => {
    return (
        <Auth0Provider
            domain="dev-9bky2y6f.us.auth0.com"
            clientId="pYycSypCAN6oljQCOvxiYnVk3VzC1llt"
            redirectUri={window.location.origin}
        >
            <AppRouter />
        </Auth0Provider>
    )
}

export default HeroesApp