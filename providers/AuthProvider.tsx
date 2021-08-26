import React, { createContext, useState } from "react";
import auth from "@react-native-firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }): JSX.Element => {
  const [user, setUser] = useState(null);
  const login = async (email: string, password: string) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
    }
  };
  const register = async (email: string, password: string) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
