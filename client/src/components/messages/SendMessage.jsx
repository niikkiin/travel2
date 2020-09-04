import React from "react";
// import PropTypes from "prop-types";

import { Icon } from "@iconify/react";
import paperclipIcon from "@iconify/icons-mdi/paperclip";

const SendMessage = ({ handleSubmit, setMessage, message }) => {
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="mt-3">
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-300 z-50 p-4 flex">
          <input
            className="p-4 mr-auto w-full outline-none"
            value={message}
            name="message"
            onChange={handleChange}
            type="text"
            placeholder="Enter your message"
          />
          <div className="flex items-center justify-center">
            <Icon className="text-gray-500 w-12 h-12" icon={paperclipIcon} />
          </div>
        </div>
      </form>
    </div>
  );
};

SendMessage.propTypes = {};

export default SendMessage;
