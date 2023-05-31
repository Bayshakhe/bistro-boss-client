import {createBrowserRouter} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../pages/home/Home/Home";
import OurMenu from "../pages/OurMenu/OurMenu";
import OurShop from "../pages/OurShop/OurShop";
import Login from "../pages/Login/Login";

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
            path: "/login",
            element: <Login></Login>
        },
      ]
    },
  ]);

export default router;