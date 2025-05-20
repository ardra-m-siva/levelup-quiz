import { Navigate } from 'react-router-dom';
const ProtectRoute = ({ children, allowedRoles }) => {
    const token = sessionStorage.getItem("token");
    const userData = sessionStorage.getItem("user");
    let role=null
    try {
         role = userData ? JSON.parse(userData).role : null;
    } catch (err) {
        console.error("Failed to parse user data:", err);
        return <Navigate to="/login" replace />;
    }
    if (!token) return <Navigate to="/login" replace />;

    if (allowedRoles && !allowedRoles.includes(role))
        return <Navigate to="*" replace />;

    return children;
};

export default ProtectRoute