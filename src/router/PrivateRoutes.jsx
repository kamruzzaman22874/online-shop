import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const location = useLocation()
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    if (token) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace={true}></Navigate>
};

export default PrivateRoutes;