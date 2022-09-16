import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useSelector } from "react-redux"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { fbAuth } from "../firebase/firebase";
import { PublicRoutes } from "../models";
import { AppStore } from '../redux/store';


export const AuthGuard = () => {
    const userState = useSelector( (store:AppStore) => store.user);
    return userState.userName ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />;
}

export default AuthGuard;