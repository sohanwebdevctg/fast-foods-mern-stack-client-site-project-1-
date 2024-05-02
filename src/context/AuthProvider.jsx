import { useState } from "react";
import { createContext } from "react";


//auth context
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

  //user
  const [user, setUser] = useState(null)


  //user information
  const userInfo = {user}

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;