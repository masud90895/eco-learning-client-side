import { createBrowserRouter } from "react-router-dom";
import Login from "../Component/Athentication/Login";
import SingUp from "../Component/Athentication/SingUp";
import Home from "../Component/Home/Home";
import ErrorPage from "../Component/Main/ErrorPage";
import Main from "../Component/Main/Main";
import Blog from "../Component/Blog/Blog";
import About3 from "../Component/About/About";
import CoursesSideBar from "../Component/Courses//CoursesSideBar";
import CourseDetaile from "../Component/Courses//CourseDetaile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <SingUp />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "about",
        element: <About3 />,
      },
      {
        path: "courses",
        element: <CoursesSideBar />,
        loader: ()=> fetch ("http://localhost:5000/"),
      },
      {
        path: "courses/:id",
        element: <CourseDetaile/>,
        loader: ({params})=> fetch (`http://localhost:5000/courses/${params.id}`),
      },
      
    ],
  },
]);
