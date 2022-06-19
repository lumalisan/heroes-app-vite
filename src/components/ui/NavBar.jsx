import { Link, NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export const Navbar = () => {
    const { user, logout } = useAuth0();

    return (
        <nav className="p-3 bg-dark text-white mb-5">
            <div className='container'>
                <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'>

                    <Link
                        className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none navbar-brand"
                        to="/"
                    >
                        Heroes App
                    </Link>

                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <NavLink
                                className={({ isActive }) => `nav-link px-2 ${isActive ? 'text-info' : 'text-white'}`}
                                to="/marvel"
                            >
                                Marvel
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => `nav-link px-2 ${isActive ? 'text-info' : 'text-white'}`}
                                to="/dc"
                            >
                                DC
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) => `nav-link px-2 ${isActive ? 'text-info' : 'text-white'}`}
                                to="/search"
                            >
                                Search
                            </NavLink>
                        </li>
                    </ul>

                    <div className="text-end">
                        <span className='text-warning me-4'>
                            {user.name}
                        </span>

                        <button
                            type='button'
                            className="btn btn-outline-light"
                            onClick={() => logout({ returnTo: window.location.origin })}
                        >
                            Logout
                        </button>
                    </div>

                </div>
            </div>
        </nav>
    )
}