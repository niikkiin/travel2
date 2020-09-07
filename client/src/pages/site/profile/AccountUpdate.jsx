import React, { useState } from "react";
// import PropTypes from 'prop-types'

// components
import ChangeAvatar from "./ChangeAvatar";


const AccountUpdate = (props) => {
  const [formData, setFormData] = useState({
    avatar: "https://png.pngtree.com/png-vector/20190217/ourlarge/pngtree-abstract-circle-business-logo-png-image_554233.jpg",
    firstName: "Sam",
    lastName: "Rose",
    emailAddress: "sam_rose@gmail.com",
    businessName: "",
    websiteAddress: "",
    address: "",
    phone: "",
    serviceArea: "",
    travelTags: "",
  });

  const {
    firstName,
    lastName,
    emailAddress,
    businessName,
    websiteAddress,
    address,
    phone,
    serviceArea,
    travelTags,
  } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Update of Profile Success");
  };

  const accountFormData = [
    {
      id: 1,
      inputValue: firstName,
      inputName: "firstName",
      label: "First Name",
    },
    {
      id: 2,
      inputValue: lastName,
      inputName: "lastName",
      label: "Last Name",
    },
    {
      id: 3,
      inputValue: emailAddress,
      inputName: "emailAddress",
      label: "Email Address",
    },
    {
      id: 4,
      inputValue: businessName,
      inputName: "businessName",
      label: "Business Name",
    },
    {
      id: 5,
      inputValue: websiteAddress,
      inputName: "websiteAddress",
      label: "Website Address",
    },
    {
      id: 6,
      inputValue: address,
      inputName: "address",
      label: "Address",
    },
    {
      id: 7,
      inputValue: phone,
      inputName: "phone",
      label: "Phone Number",
    },
    {
      id: 8,
      inputValue: serviceArea,
      inputName: "serviceArea",
      label: "Service Area",
    },
    {
      id: 9,
      inputValue: travelTags,
      inputName: "travelTags",
      label: "travel Tags",
    },
  ];

  // images
  const avatarOnChange = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      // setPost({ ...post, image: reader.result });
      // set(reader.result);
      setFormData({ ...formData, avatar: reader.result });
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <div className="w-full p-4 md:-ml-10">
    {/* <div className="w-3/4 p-4"></div> */}
      {/* <h1 className="text-2xl text-blue-500 font-medium">AccountUpdate</h1> */}
      <ChangeAvatar
        formData={formData}
        avatarOnChange={avatarOnChange}
      />
      {/* form */}
      <form className="w-full" onSubmit={(e) => handleSubmit(e)}>
      {/* <form className="w-full max-w-lg mt-6 ml-6" onSubmit={(e) => handleSubmit(e)}> */}
        {accountFormData.map((inputData) => {
          const { id, inputName, inputValue, label } = inputData;
          return (
            <div key={id} className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  htmlFor={`profile${inputName}`}
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
              className="mb-4 shadow bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none text-white font-bold py-2 px-4 rounded-full hover:-translate-y-1 focus:-translate-y-1 transform transition ease-in-out duration-300"
              type="button"
            >
              Update Profile
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

AccountUpdate.propTypes = {};

export default AccountUpdate;
