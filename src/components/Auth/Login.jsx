import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const role = handleLogin(email, password);
    if (role === "admin") {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin", email })
      );
    } else if (role === "employee") {
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "employee", email })
      );
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="flex justify-center items-center ">
        <div className="border-2 border-emerald-600 p-20 rounded-xl">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col items-center justify-center"
          >
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              className="border-2 border-emerald-600 rounded-xl px-5 py-3 mt-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400"
              type="text"
              placeholder="Enter Your Email"
            />

            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
              className="border-2 border-emerald-600 rounded-xl px-5 py-3 mt-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400"
              type="password"
              placeholder="Enter Your Password"
            />

            <button className="  text-white p-2 rounded-xl px-5 py-2 mt-5 bg-red-600">
              Login
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col items-center mt-4">
        <h1 className="text-lg font-semibold">
          Admin Access: admin@example.com password: 1234
        </h1>
        <h1 className="text-lg font-semibold">
          Employee Access: johnedoe@example.com password: 1234
        </h1>
      </div>
    </div>
  );
};

export default Login;
