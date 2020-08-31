import React, { useState } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login Success");
  };

  return (
    <div className="flex justify-center items-center align-middle h-screen">
      <div className="w-full max-w-xs sm:max-w-md">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="border-blue-500 border-t-8"
        >
          <div className="border-b border-l border-r border-gray-300 px-12 py-8 mb-4">
            <h1 className="text-3xl my-2 mb-8 text-blue-500 font-medium">
              Sign In
            </h1>

            {/* SECTION EMAIL */}
            <div className="relative my-4 mt-8 focus-within:border-blue-500">
              <input
                id="loginEmail"
                type="text"
                value={email}
                name="email"
                placeholder=" "
                onChange={(e) => handleChange(e)}
                className=" shadow block border rounded w-full py-2 px-3 text-gray-700 leading-tight appearance-none focus:shadow-outline focus:outline-none bg-transparent"
              />
              <label
                htmlFor="loginEmail"
                className="absolute top-0 -z-1 mt-2 ml-2 duration-500 text-gray-500"
              >
                Email
              </label>
            </div>

            {/* SECTION PASSWORD */}
            <div className="relative my-4 mt-8 focus-within:border-blue-500">
              <input
                id="loginPassword"
                type="password"
                placeholder=" "
                value={password}
                name="password"
                onChange={(e) => handleChange(e)}
                className=" shadow block border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight appearance-none focus:shadow-outline focus:outline-none bg-transparent"
              />
              <label
                htmlFor="loginPassword"
                className="absolute top-0 -z-1 mt-2 ml-2 duration-500 text-gray-500"
              >
                Password
              </label>
              <p className="text-red-500 text-xs italic">
                Password is required.
              </p>
            </div>

            <div className="flex items-center justify-between">
              <button
                className={
                  !email || !password
                    ? "cursor-not-allowed opacity-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                }
                // ={`${SomeConstOrVariableOrExpression} simple text`}
                type="button"
                disabled={!email || !password}
              >
                Sign In
              </button>
              <Link
                className="inline-block align-baseline font-light text-sm text-blue-500 hover:text-blue-800"
                to="/forgot-password"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="text-gray-500 my-4">
              Don't have an account yet?{" "}
              <Link
                to="/register"
                className="text-blue-500 font-bold hover:text-blue-800"
              >
                Register Now
              </Link>
            </div>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2020 TravelTagged. All rights reserved.
        </p>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
