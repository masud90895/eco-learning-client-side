import { createBrowserRouter } from "react-router-dom";
import Login from "../Component/Athentication/Login";
import Home from "../Component/Home/Home";
import ErrorPage from "../Component/Main/ErrorPage";
import Main from "../Component/Main/Main";

export const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children:[
          {
            path: '/',
            element:<Home/>
          },
          {
            path: 'login',
            element:<Login/>
          },
        ]
      },
    ]
    );