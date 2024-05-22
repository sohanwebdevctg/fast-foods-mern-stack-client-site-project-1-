import {createBrowserRouter} from "react-router-dom";


// file path
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import LogIn from "../components/LogIn";
import SignUp from "../components/SignUp";
import UpdateProfile from "../components/UpdateProfile";
import UserData from "../pages/dashboard/myCarts/MyCarts";
import PrivateRoute from './../privateRoute/PrivateRoute';
import DashboardLayout from "../layout/DashboardLayout";
import MyCarts from "../pages/dashboard/myCarts/MyCarts";
import Users from "../pages/dashboard/users/Users";
import AdminRoute from './../privateRoute/AdminRoute';
import AddItems from "../pages/dashboard/addItems/AddItems";
import ManageBookings from "../pages/dashboard/manageBookings/ManageBookings";


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
    ]
  },
  {
    path: '/login',
    element: <LogIn></LogIn>
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path : 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path : 'manageBookings',
        element: <AdminRoute><ManageBookings></ManageBookings></AdminRoute>
      },
      {
        path : 'users',
        element: <AdminRoute><Users></Users></AdminRoute>
      },
      {
        path : 'carts',
        element: <MyCarts></MyCarts>
      }
    ]
  }
]);