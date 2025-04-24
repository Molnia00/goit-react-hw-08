import { useSelector } from "react-redux"

import { selectLoggedIn } from "../redux/auth/selectors";

import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }) => {
    const isLoggedIn = useSelector(selectLoggedIn);
    return isLoggedIn ? <Navigate to='/' /> : children;
 }
