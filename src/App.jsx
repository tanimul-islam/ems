import React, { useEffect, useState, useContext } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/localStorage";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const { userRole, setUserRole, logout } = useContext(AuthContext); // Using AuthContext for role and logout
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  useEffect(() => {
    // Initialize localStorage
    setLocalStorage();

    // Check for logged-in user
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUserRole(loggedInUser.role); // Update userRole in AuthContext
      if (loggedInUser.role === "employee") {
        const { employees } = getLocalStorage();
        const employee = employees.find((e) => e.email === loggedInUser.email);
        setLoggedInUserData(employee);
      }
    }
  }, [setUserRole]);

  const handleLogin = (email, password) => {
    const { employees, admin } = getLocalStorage();

    if (email === admin.email && password === admin.password) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ email: admin.email, role: "admin" })
      );
      setUserRole("admin"); // Update AuthContext without reloading
      return "admin";
    }

    const employee = employees.find(
      (e) => e.email === email && e.password === password
    );
    if (employee) {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ email: employee.email, role: "employee" })
      );
      setUserRole("employee"); // Update AuthContext without reloading
      setLoggedInUserData(employee);
      return "employee";
    }

    alert("Invalid credentials");
    return null;
  };

  return (
    <>
      {!userRole && <Login handleLogin={handleLogin} />}
      {userRole === "admin" && <AdminDashboard />}
      {userRole === "employee" && (
        <EmployeeDashboard data={loggedInUserData} logout={logout} />
      )}
    </>
  );
};

export default App;
