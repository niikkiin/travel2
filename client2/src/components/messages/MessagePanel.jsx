import React from "react";
// import PropTypes from 'prop-types'
import MessageHeader from "./MessageHeader";

const MessagePanel = (props) => {
  const renderLeftMessage = (message) => {
    return (
      <div style={{ paddingLeft: "50%" }}>
        <div className="italic text-xs ml-2 mb-1">
          Samantha - 08/28/20 09:15 PM
        </div>
        <div className="bg-green-100 border border-gray-300 rounded-md px-3 py-2 inline-block" style={{ minWidth: "190px"}}>
          {message}
        </div>
      </div>
    );
  };

  const renderRightMessage = (message) => {
    return (
      <div className="my-4" style={{ marginRight: "50%" }}>
        <div className="italic text-xs ml-2 mb-1">
          You - 08/28/20 09:28 PM
        </div>
        <div className="bg-blue-100 border border-gray-300 rounded-md px-3 py-2 inline-block">
          {message}
        </div>
      </div>
    );
  };
  return (
    <div className="block" style={{ height: "calc(100vh - 270px)" }}>
      <MessageHeader />
      <div className="container h-full p-4 mt-4 overflow-auto flex flex-col">
        <div className="mt-auto">
          {renderRightMessage(
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis a eligendi voluptatibus pariatur magnam asperiores quo enim repellendus sed cumque sapiente maiores debitis, recusandae dicta, molestiae quaerat, non sunt."
          )}
          {renderLeftMessage("lorem hi")}
          {renderRightMessage(
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis a eligendi voluptatibus pariatur magnam asperiores quo enim repellendus sed cumque sapiente maiores debitis, recusandae dicta, molestiae quaerat, non sunt."
          )}
          {renderLeftMessage("Hello, have a nice day!")}
          {renderRightMessage("Hello, have a nice day too!")}
          {renderLeftMessage(
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis a eligendi voluptatibus pariatur magnam asperiores quo enim repellendus sed cumque sapiente maiores debitis, recusandae dicta, molestiae quaerat, non sunt."
          )}
          {renderRightMessage("lorem ipsum")}
          {renderLeftMessage("Hello, have a nice day!")}
          {renderRightMessage("Hello, have a nice day too!")}
          {renderLeftMessage("Hello, have a nice day!")}
          {renderRightMessage(
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure blanditiis a eligendi voluptatibus pariatur magnam asperiores quo enim repellendus sed cumque sapiente maiores debitis, recusandae dicta, molestiae quaerat, non sunt."
          )}
        </div>
      </div>
    </div>
  );
};

MessagePanel.propTypes = {};

export default MessagePanel;
