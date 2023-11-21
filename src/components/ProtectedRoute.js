import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = "/login", children, isLogin }) => {
    // const isLogedIn = true;
    if (!isLogin) return <Navigate to={redirectPath} replace />
    return children;
}