import {createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../pages/home/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Secret/Secret";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import MyCart from "../Layouts/Dashboard/MyCart";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/menu",
            element: <OurMenu></OurMenu>
        },
        {
            path: "/shop/:category",
            element: <OurShop></OurShop>
        },
        {
            path: "/secret",
            element: <PrivateRoute><Secret></Secret></PrivateRoute>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/signup",
            element: <SignUp></SignUp>
        },
      ]
    },
    {
      path: "/dashboard",
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: 'myCart',
          element: <MyCart></MyCart>
        }
      ]
    }
  ]);

export default router;