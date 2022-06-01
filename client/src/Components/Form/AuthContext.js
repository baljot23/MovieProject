import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signup = async (email, password, userName, photoURL) => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
        return result.user
          .updateProfile({ displayName: userName, photoURL: photoURL })
          .catch(function (error) {
            console.log(error);
          });
      });
  };

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const restPassword = (email) => {
    return auth.sendPasswordResetEmail(email);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, signup, login, logout, restPassword }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
