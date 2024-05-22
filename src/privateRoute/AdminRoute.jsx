import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading";
import useAdmin from './../hooks/useAdmin';


const AdminRoute = ({children}) => {
  

  //authProvider
  const {user, loading} = useContext(AuthContext)

  //admin route
  const [isAdmin, isAdminLoading] = useAdmin();

  //locating
  const location = useLocation();

  //loading
  if(loading || isAdminLoading){
    return <Loading></Loading>
  }

  //user
  if(user && isAdmin){
    return children;
  }

  //navigate to location
  return <Navigate to="/login" state={{from: location}} replace></Navigate>

};

export default AdminRoute;