import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localStorage";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(null);
  //const [userData, setUserData] = useState({ employees: null, admin: null });

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUserRole(loggedInUser.role);
    }
    /* const { employees = null, admin = null } = localData || {};
    setUserData({ employees, admin }); */
  }, []);

  const logout = () => {
    localStorage.removeItem("loggedInUser");
    setUserRole(null);
    window.location.href = "/";
  };

  return (
    <AuthContext.Provider value={{ userRole, setUserRole, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
