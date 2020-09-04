import React from "react";
// import PropTypes from 'prop-types'

const MessagePanel = ({ renderRightMessage, post, msgs, isSubmitted }) => {
  const { postedBy, date, title, thumbnail } = post;

  const renderLeftMessage = (message) => {
    return (
      <div style={{ paddingLeft: "50%" }}>
        <div className="italic text-xs ml-2 mb-1">
          {postedBy} - {date}
        </div>
        <div
          className="bg-green-100 border border-gray-300 rounded-md px-3 py-2 inline-block"
          style={{ minWidth: "190px" }}
        >
          {message}
        </div>
      </div>
    );
  };

  const renderHeaderMessage = (message, thumbnail, date, i) => {
    return (
      <div key={i} className="my-4" style={{ marginRight: "50%" }}>
        <div className="italic text-xs ml-2 mb-1">You - {date}</div>
        <div className="bg-blue-100 border border-gray-300 rounded-md pt-2 inline-block">
          <span className="text-xs italic flex justify-end mr-2">{date}</span>
          <div className="font-bold text-xl px-2 text-gray-800 py-2">
            {title}
          </div>
          <img className="" src={thumbnail} alt={title} />
          <div className="m-2">
          {message}

          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="sm:h-full sm:w-full"
      // style={{ height: "calc(100vh - 525px)" }}
    >
      <div className="h-full mt-4 flex flex-col">
        {/* <div className="mt-auto"> */}
        {renderRightMessage(
          "Lorem ipsum dolor  sit amet consectetur adipisicing elit. Iure blanditiis a eligendi voluptatibus pariatur magnam asperiores quo enim repellendus sed cumque sapiente maiores debitis, recusandae dicta, molestiae quaerat, non sunt."
        )}
        {renderLeftMessage(`Hello ${post.postedBy}`)}
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
        {/* {post.title && post.thumbnail
          ? renderHeaderMessage('hello', thumbnail, date)
          : null} */}
        {isSubmitted ? <>
        {/* {msgs.map((msg, i)=> renderRightMessage(msg, i))} */}
        {msgs.map((msg, i)=> renderHeaderMessage(msg, thumbnail, date, i))}
        </> : null}
        {/* </div> */}
      </div>
    </div>
  );
};

MessagePanel.propTypes = {};

export default MessagePanel;
