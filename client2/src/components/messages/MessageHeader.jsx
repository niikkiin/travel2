import React from "react";
// import PropTypes from "prop-types";

const MessageHeader = (props) => {
  return (
    <div className="border-gray-400 border pl-20 sm:pl-20 items-center h-20 pb-4 w-full block bg-gray-200 relative">
      <img
        className="rounded-full absolute border border-gray-400 inset-0 w-24 sm:w-24"
        style={{ top: "-10px", left: "-25px" }}
        src="https://png.pngtree.com/png-vector/20190217/ourlarge/pngtree-abstract-circle-business-logo-png-image_554233.jpg"
        alt="user"
      />

      <div className="flex justify-between">
        <div className="flex flex-row sm:flex-row">
          {/* user info wrapper */}
          <div className="flex flex-col justify-between">
            <div className="md:text-2xl text-xl mt-2">Samantha Smitt</div>
            <div className="online-status md:text-sm text-xs italic sm:pb-2">
              Online 17 hours ago
            </div>
          </div>
          {/* business info wrapper */}
          <div className="mt-4 ml-4 pt-1 sm:mt-4 sm:pt-1 sm:ml-4">
            <div
              className="business-name md:text-2xl text-xl"
              style={{ marginTop: "-12px" }}
            >
              Eco-Tours
            </div>
            <div className="website-name text-base sm:text:sm" style={{ marginTop: "-4px" }}>
              www.ecotours.com
            </div>
          </div>
        </div>
        <div className="flex items-center sm:mt-2">
          <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className="dots-vertical w-16 h-16 text-gray-500"
          >
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

MessageHeader.propTypes = {};

export default MessageHeader;
