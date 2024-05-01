import {createBrowserRouter} from "react-router-dom";


// file path
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Menu from "../pages/menu/Menu";
import LogIn from "../components/LogIn";



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
    ]
  },
  {
    path: '/login',
    element: <LogIn></LogIn>
  }
]);