import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './../context/AuthProvider';
import Loading from '../components/Loading';
import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {

  //authProvider
  const {user, loading} = useContext(AuthContext)

  //locating
  const location = useLocation();

  //loading
  if(loading){
    return <Loading></Loading>
  }

  //user
  if(user){
    return children;
  }

  //navigate to location
  return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;