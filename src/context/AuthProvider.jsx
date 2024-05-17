import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged } from "firebase/auth";
import app from './../firebase/firebase.config';


//auth context
export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {

  //user
  const [user, setUser] = useState(null)
  // loading 
  const [loading, setLoading] = useState(true)


  //googleLogIn
  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  // signUp
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //logIn
  const logIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  //logOut
  const logOut = () => {
    return signOut(auth)
  }

  // update user
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }

  // eheck user sign-in
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        setLoading(false)
      } else {
        // some
      }
    })
    return () => {
      return unsubscribed();
    }
  }, [])


  //user information
  const userInfo = {user, loading, googleLogIn, signUp, logIn, logOut, updateUserProfile}

  return (
    <AuthContext.Provider value={userInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;