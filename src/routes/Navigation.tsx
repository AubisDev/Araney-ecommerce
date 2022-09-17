import { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Navigate } from 'react-router-dom';
import { RoutesWithNotFound } from "../utilities";
import { PublicRoutes, PrivateRoutes } from "../models/routes";
import { Navbar } from "../components/Navbar";
import {  firebaseAuth } from '../firebase/firebase';
import {PrivateAuthGuard, PublicAuthGuard} from '../guard/AuthGuard';
import { setUserData, userLogout } from '../redux/states/user';
import { User } from 'firebase/auth';

const Login = lazy(() => import('../pages/Public/Login'));
const Register = lazy(() => import('../pages/Public/Register'));
const Home = lazy(() => import('../pages/Public/Home/Home'));
const Checkout = lazy( () => import('../pages/Private/Checkout'));


export const Navigation = () => {
    const dispatch = useDispatch();

    const [user, setUser] = useState<User>();

    useEffect(() => {
        firebaseAuth.onAuthStateChanged( async(user: User | null) => {
          if (user) {
            const token = await firebaseAuth.currentUser?.getIdToken(true);
            dispatch(
                setUserData({
                    username: user.displayName,
                    email: user.email,
                    token
                })
            )
            setUser( user );
          } else {
            dispatch( userLogout({}) )
          }
        })
    }, []);
       

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


