import React from "react";
// import PropTypes from "prop-types";

const ChangeAvatar = ({
  avatarOnChange,
  formData: { avatar, firstName, lastName },
}) => {
  return (
    <div className="flex items-center max-w-lg justify-center pt-4">
      <img
        className="rounded-full border object-cover w-12 h-12"
        src={avatar}
        alt={`${firstName} ${lastName}`}
      />
      <div className="flex flex-col text-sm mx-3">
        <div className="text-gray-700">{`${firstName} ${lastName}`}</div>
        <label htmlFor="avatarInput">
          <div className="text-blue-500 font-medium hover:text-blue-800 transition ease-in-out duration-500 cursor-pointer">
            Change Profile Picture
          </div>
        </label>
        <input
          className="hidden"
          id="avatarInput"
          type="file"
          name="avatar"
          onChange={avatarOnChange}
        />
      </div>
    </div>
  );
};

ChangeAvatar.propTypes = {};

export default ChangeAvatar;
