import React, { useState } from "react";
// import PropTypes from "prop-types";

const ChangePassword = (props) => {
  const [formData, setFormData] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const {
    oldPassword,
    newPassword,
    confirmPassword
  } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Update of Password Success");
  };

  const accountFormData = [
    {
      id: 1,
      inputValue: oldPassword,
      inputName: "oldPassword",
      label: "Old Password",
    },
    {
      id: 2,
      inputValue: newPassword,
      inputName: "newPassword",
      label: "New Password",
    },
    {
      id: 3,
      inputValue: confirmPassword,
      inputName: "confirmPassword",
      label: "Confirm Password",
    },
  ];
  return (
    <div className="w-3/4 p-4">
      {/* <h1 className="text-2xl text-blue-500 font-medium">Change Password</h1> */}

      {/* form */}
      <form
        className="w-full"
        onSubmit={(e) => handleSubmit(e)}
      >
        {accountFormData.map((inputData) => {
          const { id, inputName, inputValue, label } = inputData;
          return (
            <div key={id} className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for={`profile${inputName}`}
                >
                  {label}
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 transition ease-in-out duration-500"
                  id={`profile${inputName}`}
                  type="text"
                  value={inputValue}
                  name={inputName}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
          );
        })}

        {/* SECTION SUBMIT UPDATED PROFILE */}
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Update Password
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

ChangePassword.propTypes = {};

export default ChangePassword;
