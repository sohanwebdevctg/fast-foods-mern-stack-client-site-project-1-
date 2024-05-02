import { useState } from "react";
import { createContext } from "react";
import { getAuth } from "firebase/auth";
import app from './../firebase/firebase.config';


//auth context
export const AuthContext = createContext(null)
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

  //user
  const [user, setUser] = useState(null)
  // loading 
  const [loading, setLoading] = useState(true)


  //user information
  const userInfo = {user}

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;