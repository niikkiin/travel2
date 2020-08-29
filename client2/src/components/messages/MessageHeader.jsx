import React from "react";
// import PropTypes from "prop-types";

const MessageHeader = (props) => {
  return (
    <div className="border-gray-400 border h-24 w-auto bg-gray-200 relative">
      <img
        className="rounded-full w-32 absolute border border-gray-400"
        style={{ top: "-20px", left: "-34px" }}
        src="https://png.pngtree.com/png-vector/20190217/ourlarge/pngtree-abstract-circle-business-logo-png-image_554233.jpg"
        alt="user"
      />

      <div className="flex justify-between items-center ml-32">
        {/* user info wrapper */}
        <div className="flex flex-col justify-between">
          <div className="text-2xl mt-2">Samantha Smitt</div>
          <div className="online-status text-sm italic">
            Online 17 hours ago
          </div>
          <div className="tags text-sm font-semibold flex">
            <div className="individual-tag mr-5">#EcoTours</div>
            <div className="individual-tag mr-5">#Mangroove</div>
            <div className="individual-tag mr-5">#Thailand</div>
          </div>
        </div>
        {/* business info wrapper */}
        <div className="mr-auto">
          <div
            className="business-name text-2xl"
            style={{ marginTop: "-12px" }}
          >
            Eco-Tours
          </div>
          <div className="website-name text-base" style={{ marginTop: "-4px" }}>
            www.ecotours.com
          </div>
        </div>
        <div className="flex items-center">
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
