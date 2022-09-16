import { lazy, Suspense, useEffect } from 'react';
import { Provider } from "react-redux";
import { BrowserRouter, Route, Navigate, useNavigate} from 'react-router-dom';
import store from "../redux/store";
import { RoutesWithNotFound } from "../utilities";
import { PublicRoutes, PrivateRoutes } from "../models/routes";
import { Navbar } from "../components/Navbar";
import { onAuthStateChanged } from "firebase/auth";
import { fbAuth } from '../firebase/firebase';
import AuthGuard from '../guard/AuthGuard';

const Login = lazy(() => import('../pages/Public/Login'));
const Register = lazy(() => import('../pages/Public/Register'));
const Home = lazy(() => import('../pages/Public/Home/Home'));
const Checkout = lazy( () => import('../pages/Private/Checkout'));


export const Navigation = () => {
   
       

    return(
        <Suspense fallback={<>Cargando...</>}>
            <Provider store={store}>
                <Navbar />
                <BrowserRouter>
                    <RoutesWithNotFound>
                        <Route path={'/'} element={ <Navigate to={PublicRoutes.HOME} />} />
                        <Route path={PublicRoutes.LOGIN} element={< Login/>} />
                        <Route path={PublicRoutes.REGISTER} element={< Register/>} />
                        <Route path={PublicRoutes.HOME} element={< Home/>} />
                        {/* //! Add User has to be logged in to show  with a Guard*/}
                        <Route element={<AuthGuard/>}>
                            <Route path={`${PrivateRoutes.CHECKOUT}/*`} element={< Checkout/>} />
                        </Route>
                    </RoutesWithNotFound>
                </BrowserRouter>
            </Provider>
        </Suspense>
       
    )
}

export default Navigation;
