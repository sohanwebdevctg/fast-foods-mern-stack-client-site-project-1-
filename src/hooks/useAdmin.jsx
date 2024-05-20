import React from 'react';
import { useContext } from 'react';
import { AuthContext } from './../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useAdmin = () => {

  //authProvider
  const {user} = useContext(AuthContext)

  //token
  const token = localStorage.getItem('access_token');

  // get data from database
  const { data : isAdmin, isLoading : isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/users/admin/${user?.email}`,{
        headers: { authorization : `Bearer ${token}`}
      })

      return res.data.admin
    },
  })

  return [isAdmin, isAdminLoading]
};

export default useAdmin;