import React from "react";
// import PropTypes from 'prop-types'

// icon
import { Icon } from "@iconify/react";

const CustomRadioButton = ({ handleRadioChange, icon, label, ...props }) => {
  return (
    <>
      <input
        type="radio"
        className="hidden"
        onChange={handleRadioChange}
        {...props}
      />
      <label
        htmlFor={label}
        className="relative w-32 h-32 rounded-full text-sm border-2 cursor-pointer text-gray-400 border-gray-400 hover:text-blue-500 focus:text-blue-500 hover:border-blue-500 focus:border-blue-500 transition duration-500 ease-in-out m-4"
      >
        <span className="absolute" style={{ bottom: "0.7rem", left: "2.3rem" }}>{label}</span>
        <Icon
          className="absolute w-16 h-16"
          style={{ top: "1.7rem", left: "2rem" }}
          icon={icon}
        />
      </label>
    </>
  );
};

CustomRadioButton.propTypes = {};

export default CustomRadioButton;
