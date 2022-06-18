import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

const PrivateRoute = ({ children }) => {

    const context = useContext(AuthContext);
    const location = useLocation();

    localStorage.setItem('lastPath', location.pathname + location.search);

    return context.user.isLoggedIn ? children : <Navigate to='/login' />;
}

export default PrivateRoute