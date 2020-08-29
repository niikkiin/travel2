import React from "react";
// import PropTypes from "prop-types";

import { Icon } from '@iconify/react';
import paperclipIcon from '@iconify/icons-mdi/paperclip';

const SendMessage = (props) => {
  return (
    <div className="mt-32">
      <div className="bg-gray-300 p-4 flex">
        <input className="p-4 mr-auto w-full" type="text" placeholder="Enter your message" />
        <div className="flex items-center justify-center">
          <Icon className="text-gray-500 w-12 h-12" icon={paperclipIcon} />
        </div>
      </div>
    </div>
  );
};

SendMessage.propTypes = {};

export default SendMessage;
