import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Google = () => {
  //authProvider
  const { googleLogIn } = useContext(AuthContext);

  //googleBtn
  const googleBtn = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
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
