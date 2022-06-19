import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export const Navbar = () => {
    const { user, logout } = useAuth0();

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link
                className="navbar-brand mx-4"
                to="/"
            >
                Heroes App Vite
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className="nav-item nav-link"
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className="nav-item nav-link"
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className='nav-item nav-link text-info'>
                        {user.name}
                    </span>

                    <button
                        className="nav-item nav-link btn"
                        onClick={() => logout({ returnTo: window.location.origin })}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}