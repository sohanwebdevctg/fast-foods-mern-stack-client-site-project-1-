import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from './../context/AuthProvider';


const useCarts = () => {

  // authProvider
  const {user} = useContext(AuthContext);
  const token = localStorage.getItem('access_token');
  //cart data
  const { data: carts = [], refetch } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`,{
        headers: { authorization: `Bearer ${token}`}
      })
      return res.json()
    },
  })


  return [carts, refetch]
};

export default useCarts;