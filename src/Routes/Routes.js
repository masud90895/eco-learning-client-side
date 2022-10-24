import { createBrowserRouter } from "react-router-dom";
import Login from "../Component/Athentication/Login";
import SingUp from "../Component/Athentication/SingUp";
import Courses from "../Component/Courses/Courses";
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
            path: 'home',
            element:<Home/>
          },
          {
            path: 'login',
            element:<Login/>
          },
          {
            path: 'register',
            element:<SingUp/>
          },
          {
            path: 'courses',
            element:<Courses/>,
            loader: ()=> fetch ("http://localhost:5000")
          },
        ]
      },
    ]
    );