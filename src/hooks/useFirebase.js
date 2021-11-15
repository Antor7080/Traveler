import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});


  const auth = getAuth();
  const [isLoading, setIsLoading] = useState(true);

  const signInWithGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user)
      })
      .finally(() => setIsLoading(false));
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      }
      else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth])

  const logOut = () => {
    signOut(auth)
      .then(() => { })
      .finally(() => setIsLoading(false));
  }
  return {
    user,

    isLoading,
    signInWithGoogle,
    logOut,
  }
}
export default useFirebase;