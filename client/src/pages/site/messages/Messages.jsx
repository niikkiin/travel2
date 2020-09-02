import React from "react";
// import PropTypes from "prop-types";

// components
import MessagePanel from "components/messages/MessagePanel";
import SendMessage from "components/messages/SendMessage";
import RoomPanel from "components/messages/RoomPanel";

const Messages = (props) => {
  return (
    <div className="mt-2 flex">
      <div className="hidden sm:block w-1/4">
        <RoomPanel />
      </div>
      <div className="lg:w-2/4 sm:w-3/4">
        <div className="h-full mx-8">
          {/* <div className="h-full mx-auto w-5/6 sm:w-4/6 "> */}
          <div className="mt-4 sm:my-2 sm:container">
            {/* bg-pink-500 sm:bg-purple-500 md:bg-green-500 lg:border-orange-500 xl:bg-blue-500 */}
            <MessagePanel />
            <SendMessage />
          </div>
        </div>
      </div>
    </div>
  );
};

Messages.propTypes = {};

export default Messages;