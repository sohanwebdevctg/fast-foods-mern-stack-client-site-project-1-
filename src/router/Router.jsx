import {createBrowserRouter} from "react-router-dom";


// file path
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
import UpdateProfile from "../components/UpdateProfile";
import UserData from "../pages/userData/UserData";
import PrivateRoute from './../privateRoute/PrivateRoute';


//router
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/updateProfile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: '/userData',
        element: <PrivateRoute><UserData></UserData></PrivateRoute>
      },
    ]
  },
  {
    path: '/login',
    element: <LogIn></LogIn>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  }
]);