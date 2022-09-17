import { useSelector } from "react-redux"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import { PublicRoutes } from "../models";
import { AppStore } from '../redux/store';


export const PrivateAuthGuard = () => {
    const userState = useSelector( (store:AppStore) => store.user);
    return userState.username ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />;
}


export const PublicAuthGuard = () => {
    const userState = useSelector( (store:AppStore) => store.user);
    return userState.username ? <Navigate replace to={PublicRoutes.HOME} /> : <Outlet/> ;
}