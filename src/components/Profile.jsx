import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";


const Profile = ({user}) => {

  //authProvider
  const {logOut} = useContext(AuthContext);

  //location
  const location = useLocation()
  const navigate = useNavigate()

  //logout Btn
  const logOutBtn = () => {
    logOut()
    .then(() => {
      alert('success logOut')
      navigate('/');
    }).catch((error) => {
      const errorMessage = error.message;
      if(errorMessage){
        alert(errorMessage)
      }
    });
    
  }

  return (
    <>
      <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {
            user?.photoURL ? <img src={user?.photoURL}></img> : <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          }
          
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li><Link to="/">Dashboard</Link></li>
        <li><button onClick={logOutBtn}>LogOut</button></li>
      </ul>
    </div>
    </>
  );
};

export default Profile;