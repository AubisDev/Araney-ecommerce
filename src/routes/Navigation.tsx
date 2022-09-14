import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Navigate} from 'react-router-dom';
import store from "../redux/store";
import { RoutesWithNotFound } from "../utilities";
import { PublicRoutes, PrivateRoutes } from "../models/routes";
import { Navbar } from "../components/Navbar";

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
                        {/* //! Add User has been logged to show  with a Guard*/}
                        <Route path={PrivateRoutes.CHECKOUT} element={< Checkout/>} />
                    </RoutesWithNotFound>
                </BrowserRouter>
            </Provider>
        </Suspense>
       
    )
}

export default Navigation;
