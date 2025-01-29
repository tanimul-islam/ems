import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Header = ({ user }) => {
  const { logout } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-end">
      <h1 className="text-2xl font-semibold">
        Hello <br></br> <span className="text-3xl font-bold">{user}</span>
      </h1>
      <button
        onClick={logout}
        className="bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium"
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
