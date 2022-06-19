import { Navigate, useLocation } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import Loading from "../components/ui/Loading";

const PrivateRoute = ({ children }) => {

    const location = useLocation();
    const { isAuthenticated, isLoading } = useAuth0();

    localStorage.setItem('lastPath', location.pathname + location.search);

    if (isLoading) return <Loading />

    return isAuthenticated ? children : <Navigate to='/login' />;
}

export default PrivateRoute