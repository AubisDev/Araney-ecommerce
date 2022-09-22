import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { PublicRoutes } from "../models";
import { AppStore } from '../redux/store';


export const PrivateAuthGuard = () => {
    const { username } = useSelector( (store:AppStore) => store.user);
    return username ? <Outlet /> : <Navigate replace to={PublicRoutes.LOGIN} />;
}


export const PublicAuthGuard = () => {
    const userState = useSelector( (store:AppStore) => store.user);
    return userState.username ? <Navigate replace to={PublicRoutes.HOME} /> : <Outlet/> ;
}