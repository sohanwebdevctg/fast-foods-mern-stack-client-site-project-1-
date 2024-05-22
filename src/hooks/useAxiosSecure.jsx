import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/AuthProvider";

// base url
const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  // navigate user
  const navigate = useNavigate();

  //authProvider
  const { logOut } = useContext(AuthContext);

  //interceptor data request adn response
  useEffect(() => {

    // Add a request interceptor
    axiosSecure.interceptors.request.use((config) => {
      // get token
      const token = localStorage.getItem('access_token')
      //check token
      if(token){
        config.headers.Authorization = `Bearer ${token}`
      }
      return config;
    })


    // Add a response interceptor
    axiosSecure.interceptors.response.use((response) => response,
    async (error) => {
      //get status
      const status = error.response.status;

      //check status
      if(status === 401 || status === 403){
        await logOut()
        navigate('/login')
      }

      return Promise.reject(error);
    })

  }, [axiosSecure,logOut, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;
