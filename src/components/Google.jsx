import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Google = () => {
  //authProvider
  const { googleLogIn } = useContext(AuthContext);

  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  //googleBtn
  const googleBtn = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        //create user
      const userData = {name : user.displayName, email: user.email}
       //create user data in server
      fetch('http://localhost:5000/users',{
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(userData)
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        navigate(from, { replace: true });
      })
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <>
    {/* google content start */}
      <button
        onClick={googleBtn}
        className="w-8 h-8 rounded-full border-[1px] border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white"
      >
        <FaGoogle className="mx-auto items-center" />
      </button>
      {/* google content end */}
    </>
  );
};

export default Google;
