import { lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Navigate } from 'react-router-dom';
import { RoutesWithNotFound } from "../utilities";
import { PublicRoutes, PrivateRoutes } from "../models/routes";
import { Navbar } from "../components/Navbar";
import {PrivateAuthGuard, PublicAuthGuard} from '../guard/AuthGuard';
const Login = lazy(() => import('../pages/Public/Login'));
const Register = lazy(() => import('../pages/Public/Register'));
const Home = lazy(() => import('../pages/Public/Home/Home'));
const Checkout = lazy( () => import('../pages/Private/Checkout'));


export const Navigation = () => {
    return(
        <Suspense fallback={<>Cargando...</>}>
            <BrowserRouter>
                <Navbar />
                <RoutesWithNotFound>
                    <Route path={'/'} element={ <Navigate to={PublicRoutes.HOME} />} />
                    <Route path={PublicRoutes.HOME} element={ <Home/>} />
                    <Route element={<PublicAuthGuard/>}>
                        <Route path={PublicRoutes.LOGIN} element={< Login/>} />
                        <Route path={PublicRoutes.REGISTER} element={< Register/>} />
                    </Route>
                    
                    {/* //! Add User has to be logged in to show  with a Guard*/}
                    <Route element={<PrivateAuthGuard/>}>
                        <Route path={`${PrivateRoutes.CHECKOUT}/*`} element={< Checkout/>} />
                    </Route>
                </RoutesWithNotFound>
            </BrowserRouter>
        </Suspense>
       
    )
}

export default Navigation


