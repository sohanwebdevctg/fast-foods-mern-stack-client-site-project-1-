import { useContext } from 'react';
import { AuthContext } from './../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import useAxiosSecure from './useAxiosSecure';

const useAdmin = () => {

  //authProvider
  const {user} = useContext(AuthContext)

  //get axiosSecure hook
  const [axiosSecure] = useAxiosSecure()


  // get data from database
  const { data : isAdmin, isLoading : isAdminLoading } = useQuery({
    queryKey: ['isAdmin', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`)
      return res.data.admin
    },
  })
  return [isAdmin, isAdminLoading]
};

export default useAdmin;