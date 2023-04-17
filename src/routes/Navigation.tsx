import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Navigate } from "react-router-dom";
import { RoutesWithNotFound } from "../utilities";
import { PublicRoutes, PrivateRoutes } from "../models";
import { Footer } from "../components";
import { PrivateAuthGuard, PublicAuthGuard } from "../guard";
import { Home } from "../pages";
import { Navbar } from "../components/Navbar/Navbar";

const About = lazy(() => import("../pages/Public/About/About"));
const Product = lazy(() => import("../pages/Public/Product/Product"));
const Login = lazy(() => import("../pages/Public/Login/Login"));
const Inventory = lazy(() => import("../pages/Public/Inventory/Inventory"));
const Register = lazy(() => import("../pages/Public/Register/Register"));
const Checkout = lazy(() => import("../pages/Private/Checkout/Checkout"));
// const Home = lazy(() => import("../pages/Public/Home/Home"));

export const Navigation = () => {
  return (
    <Suspense fallback={<>Cargando...</>}>
      <BrowserRouter>
        <Navbar />
        <RoutesWithNotFound>
          <Route path={PublicRoutes.HOME} element={<Home />} />
          <Route path={PublicRoutes.ABOUT} element={<About />} />
          <Route path={PublicRoutes.INVENTORY} element={<Inventory />} />
          <Route
            path={`${PublicRoutes.INVENTORY}/:category`}
            element={<Inventory />}
          />
          <Route
            path={`${PublicRoutes.PRODUCT}/:productName/:productId`}
            element={<Product />}
          />
          <Route element={<PublicAuthGuard />}>
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route path={PublicRoutes.REGISTER} element={<Register />} />
          </Route>
          <Route element={<PrivateAuthGuard />}>
            <Route
              path={`${PrivateRoutes.CHECKOUT}/*`}
              element={<Checkout />}
            />
          </Route>
        </RoutesWithNotFound>
        <Footer />
      </BrowserRouter>
    </Suspense>
  );
};

export default Navigation;
