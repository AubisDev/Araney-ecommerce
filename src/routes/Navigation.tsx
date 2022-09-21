import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Navigate } from 'react-router-dom';
import { RoutesWithNotFound } from "../utilities";
import { PublicRoutes, PrivateRoutes } from "../models";
import { Navbar, Footer } from "../components";
import {PrivateAuthGuard, PublicAuthGuard} from '../guard';

const About= lazy( () => import('../pages/Public/About'));
const Category= lazy( () => import('../pages/Public/Category'));
const Product= lazy( () => import('../pages/Public/Product'));
const Login = lazy(() => import('../pages/Public/Login'));
const Register = lazy(() => import('../pages/Public/Register'));
const Checkout = lazy( () => import('../pages/Private/Checkout'));
const Home = lazy(() => import('../pages/Public/Home/Home'));

export const Navigation = () => {
    return(
        <Suspense fallback={<>Cargando...</>}>
            <BrowserRouter>
                <Navbar />
                <RoutesWithNotFound>
                    <Route path={'/'} element={ <Navigate to={PublicRoutes.HOME} />} />
                    <Route path={PublicRoutes.HOME} element={ <Home/>} />
                    <Route path={PublicRoutes.ABOUT} element={ <About/>} />
                    <Route path={`${PublicRoutes.PRODUCT}/:productName/:productId`} element={ <Product/>} />
                    <Route path={`${PublicRoutes.CATEGORY}/:categoryName`} element={ <Category/>} />
                    <Route element={<PublicAuthGuard/>}>
                        <Route path={PublicRoutes.LOGIN} element={< Login/>} />
                        <Route path={PublicRoutes.REGISTER} element={< Register/>} />
                    </Route>
                    
                    {/* //! Add User has to be logged in to show  with a Guard*/}
                    <Route element={<PrivateAuthGuard/>}>
                        <Route path={`${PrivateRoutes.CHECKOUT}/*`} element={< Checkout/>} />
                    </Route>
                </RoutesWithNotFound>
                <Footer/>
            </BrowserRouter>
        </Suspense>
       
    )
}

export default Navigation


