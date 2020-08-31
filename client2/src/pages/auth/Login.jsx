import React from "react";
// import PropTypes from "prop-types";

const Login = (props) => {
  return (
    <div className="flex justify-center items-center align-middle h-screen">
      <div class="w-full max-w-xs sm:max-w-md">
        <form class="bg-white border border-gray-400 px-12 py-8 mb-4">
          <h1 className="text-3xl my-2 mb-8">Sign In</h1>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Email Address
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="example@gmail.com"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a
              class="inline-block align-baseline font-light text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="text-gray-500 my-4">
            Don't have an account yet? <span className="text-blue-500 font-bold hover:text-blue-800">Register Now</span>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;2020 TravelTagged. All rights reserved.
        </p>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
