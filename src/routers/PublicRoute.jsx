import { Navigate } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import Loading from "../components/ui/Loading";

const PublicRoute = ({ children }) => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) return <Loading />

    return !isAuthenticated ? children : <Navigate to='/' />;
}

export default PublicRoute