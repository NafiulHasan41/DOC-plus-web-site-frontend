import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layouts/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Root/>,
      errorElement:<ErrorPage/>,
      children: [
        {
            index: true,
            element: <Home/>
        },
      
      ]
    },
  ]);