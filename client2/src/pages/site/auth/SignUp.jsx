import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomRadioButton from "components/common/CustomRadioButton";
// import PropTypes from "prop-types";

// icon
import userIcon from "@iconify/icons-fa-solid/user";
import userTie from "@iconify/icons-fa-solid/user-tie";

const SignUp = (props) => {
  const [formData, setFormData] = useState({
    userType: "",
    firstName: "",
    lastName: "",
    email: "",
    businessName: "",
    password: "",
    confirmPassword: "",
  });

  const {
    userType,
    firstName,
    lastName,
    email,
    businessName,
    password,
    confirmPassword,
  } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    console.log("SignUp Success");
  };

  const travelerForm = (
    <>
      {/* SECTION FIRST NAME */}
      <div className="relative my-4 focus-within:border-blue-500">
        <input
          id="firstName"
          type="text"
          value={firstName}
          name="firstName"
          placeholder=" "
          onChange={(e) => handleChange(e)}
          className=" shadow block border rounded w-full py-2 px-3 text-gray-700 leading-tight appearance-none focus:shadow-outline focus:outline-none bg-transparent"
        />
        <label
          htmlFor="firstName"
          className="absolute top-0 -z-1 mt-2 ml-2 duration-500 text-gray-500"
        >
          First Name
        </label>
      </div>
      {/* SECTION LAST NAME */}
      <div className="relative my-4 mt-8 focus-within:border-blue-500">
        <input
          id="lastName"
          type="text"
          value={lastName}
          name="lastName"
          placeholder=" "
          onChange={(e) => handleChange(e)}
          className=" shadow block border rounded w-full py-2 px-3 text-gray-700 leading-tight appearance-none focus:shadow-outline focus:outline-none bg-transparent"
        />
        <label
          htmlFor="lastName"
          className="absolute top-0 -z-1 mt-2 ml-2 duration-500 text-gray-500"
        >
          Last Name
        </label>
      </div>
      {/* SECTION EMAIL */}
      <div className="relative my-4 mt-8 focus-within:border-blue-500">
        <input
          id="email"
          type="text"
          value={email}
          name="email"
          placeholder=" "
          onChange={(e) => handleChange(e)}
          className=" shadow block border rounded w-full py-2 px-3 text-gray-700 leading-tight appearance-none focus:shadow-outline focus:outline-none bg-transparent"
        />
        <label
          htmlFor="email"
          className="absolute top-0 -z-1 mt-2 ml-2 duration-500 text-gray-500"
        >
          Email
        </label>
      </div>
      {/* SECTION PASSWORD */}
      <div className="relative my-4 mt-8 focus-within:border-blue-500">
        <input
          id="password"
          type="password"
          value={password}
          name="password"
          placeholder=" "
          onChange={(e) => handleChange(e)}
          className=" shadow block border rounded w-full py-2 px-3 text-gray-700 leading-tight appearance-none focus:shadow-outline focus:outline-none bg-transparent"
        />
        <label
          htmlFor="password"
          className="absolute top-0 -z-1 mt-2 ml-2 duration-500 text-gray-500"
        >
          Password
        </label>
      </div>

      {/* SECTION CONFIRM PASSWORD */}
      <div className="relative my-4 mt-8 focus-within:border-blue-500">
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          placeholder=" "
          onChange={(e) => handleChange(e)}
          className=" shadow block border rounded w-full py-2 px-3 text-gray-700 leading-tight appearance-none focus:shadow-outline focus:outline-none bg-transparent"
        />
        <label
          htmlFor="confirmPassword"
          className="absolute top-0 -z-1 mt-2 ml-2 duration-500 text-gray-500"
        >
          Confirm Password
        </label>
      </div>
    </>
  );
  const businessForm = (
    <>
      {/* SECTION FIRST NAME */}
      <div className="relative my-4 focus-within:border-blue-500">
        <input
          id="firstName"
          type="text"
          value={firstName}
          name="firstName"
          placeholder=" "
          onChange={(e) => handleChange(e)}
          className=" shadow block border rounded w-full py-2 px-3 text-gray-700 leading-tight appearance-none focus:shadow-outline focus:outline-none bg-transparent"
        />
        <label
          htmlFor="firstName"
          className="absolute top-0 -z-1 mt-2 ml-2 duration-500 text-gray-500"
        >
          First Name
        </label>
      </div>
      {/* SECTION LAST NAME */}
      <div className="relative my-4 mt-8 focus-within:border-blue-500">
        <input
          id="lastName"
          type="text"
          value={lastName}
          name="lastName"
          placeholder=" "
          onChange={(e) => handleChange(e)}
          className=" shadow block border rounded w-full py-2 px-3 text-gray-700 leading-tight appearance-none focus:shadow-outline focus:outline-none bg-transparent"
        />
        <label
          htmlFor="lastName"
          className="absolute top-0 -z-1 mt-2 ml-2 duration-500 text-gray-500"
        >
          Last Name
        </label>
      </div>
      {/* SECTION EMAIL */}
      <div className="relative my-4 mt-8 focus-within:border-blue-500">
        <input
          id="email"
          type="text"
          value={email}
          name="email"
          placeholder=" "
          onChange={(e) => handleChange(e)}
          className=" shadow block border rounded w-full py-2 px-3 text-gray-700 leading-tight appearance-none focus:shadow-outline focus:outline-none bg-transparent"
        />
        <label
          htmlFor="email"
          className="absolute top-0 -z-1 mt-2 ml-2 duration-500 text-gray-500"
        >
          Email
        </label>
      </div>
      {/* SECTION BUSINESS NAME */}
      <div className="relative my-4 mt-8 focus-within:border-blue-500">
        <input
          id="businessName"
          type="text"
          value={businessName}
          name="businessName"
          placeholder=" "
          onChange={(e) => handleChange(e)}
          className=" shadow block border rounded w-full py-2 px-3 text-gray-700 leading-tight appearance-none focus:shadow-outline focus:outline-none bg-transparent"
        />
        <label
          htmlFor="businessName"
          className="absolute top-0 -z-1 mt-2 ml-2 duration-500 text-gray-500"
        >
          Business Name
        </label>
      </div>
      {/* SECTION PASSWORD */}
      <div className="relative my-4 mt-8 focus-within:border-blue-500">
        <input
          id="password"
          type="password"
          value={password}
          name="password"
          placeholder=" "
          onChange={(e) => handleChange(e)}
          className=" shadow block border rounded w-full py-2 px-3 text-gray-700 leading-tight appearance-none focus:shadow-outline focus:outline-none bg-transparent"
        />
        <label
          htmlFor="password"
          className="absolute top-0 -z-1 mt-2 ml-2 duration-500 text-gray-500"
        >
          Password
        </label>
      </div>

      {/* SECTION CONFIRM PASSWORD */}
      <div className="relative my-4 mt-8 focus-within:border-blue-500">
        <input
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          name="confirmPassword"
          placeholder=" "
          onChange={(e) => handleChange(e)}
          className=" shadow block border rounded w-full py-2 px-3 text-gray-700 leading-tight appearance-none focus:shadow-outline focus:outline-none bg-transparent"
        />
        <label
          htmlFor="confirmPassword"
          className="absolute top-0 -z-1 mt-2 ml-2 duration-500 text-gray-500"
        >
          Confirm Password
        </label>
      </div>
    </>
  );

  const getUserType = (userType) => {
    if (userType === "Traveler") {
      return travelerForm;
    }
    if (userType === "Business") {
      return businessForm;
    }
  };

  return (
    <div className="flex justify-center items-center align-middle h-screen">
      <div className="w-full max-w-xs sm:max-w-md">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="border-blue-500 border-t-8"
        >
          <div className="border-b border-l border-r border-gray-300 px-12 py-8 mb-4">
            <>
              {userType ? (
                <div className="flex items-center mb-8">
                  <div className="text-gray-400 mr-4 flex hover:text-blue-500 focus:text-blue-500 transition duration-500 ease-in-out" onClick={e => setFormData({ ...formData, userType: ''})}>
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="arrow-narrow-left w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Back
                  </div>
                  <div className="text-left text-xl text-blue-500 font-medium">
                    {userType} Account Sign Up
                  </div>
                </div>
              ) : (
                <>
                  <h1 className="text-3xl my-2 mb-8 text-blue-500 font-medium">
                    Sign Up
                  </h1>
                  <h2 className="text-xl text-gray-600">Select User Type</h2>

                  <div className="flex justify-evenly">
                    <CustomRadioButton
                      name="userType"
                      value="Traveler"
                      label="Traveler"
                      id="Traveler"
                      icon={userIcon}
                      handleRadioChange={(e) => handleChange(e)}
                    />
                    <CustomRadioButton
                      name="userType"
                      value="Business"
                      label="Business"
                      id="Business"
                      icon={userTie}
                      handleRadioChange={(e) => handleChange(e)}
                    />
                  </div>
                </>
              )}
            </>
            <>{getUserType(userType)}</>

            {userType ? (
              <div className="flex items-center justify-between">
                <button
                  className={
                    !firstName ||
                    !lastName ||
                    !email ||
                    !password ||
                    !confirmPassword
                      ? "cursor-not-allowed opacity-50 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      : "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  }
                  // ={`${SomeConstOrVariableOrExpression} simple text`}
                  type="button"
                  disabled={
                    !firstName ||
                    !lastName ||
                    !email ||
                    !password ||
                    !confirmPassword
                  }
                >
                  Create an account
                </button>
                {/* <Link
                  className="inline-block align-baseline font-light text-sm text-blue-500 hover:text-blue-800"
                  to="/forgot-password"
                >
                  Forgot Password?
                </Link> */}
                <div
                  className="align-baseline text-base cursor-pointer font-medium text-gray-500 hover:text-blue-500"
                  onClick={(e) => setFormData({ ...formData, userType: "" })}
                >
                  <Link
                    className="inline-block align-baseline font-light text-sm text-blue-500 hover:text-blue-800"
                    to="/forgot-password"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
            ) : null}
            <div className="text-gray-500 my-4">
              Already have an account?{" "}
              <Link
                to="/"
                className="text-blue-500 font-bold hover:text-blue-800"
              >
                Login Here
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

SignUp.propTypes = {};

export default SignUp;
