import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const useMenu = () => {

  // authProvider
  const {loading} = useContext(AuthContext)

  // fetch menu data
  const { data : menu = [] } = useQuery({
    queryKey: ['menu'],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get('http://localhost:5000/allFastFoods')
      return res.data
    },
  })

  return [menu]
};

export default useMenu;