import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

const PublicRoute = ({ children }) => {
    const context = useContext(AuthContext);

    return !context.user.isLoggedIn ? children : <Navigate to='/' />;
}

export default PublicRoute