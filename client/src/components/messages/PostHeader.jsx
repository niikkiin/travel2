import React from "react";
// import PropTypes from 'prop-types'

const PostHeader = ({ post: { thumbnail, title, date } }) => {
  return (
    <div className="h-24 bg-gray-200 border border-gray-400 flex justify-between space-x-4 px-2 cursor-pointer hover:bg-blue-100 ease-in-out duration-300">
      <div className="flex items-center">
        <img
          src={thumbnail}
          alt={title}
          className="h-20 w-32 m-2 ml-1 object-cover object-center"
        />
        <div className="flex flex-col">
          <div className="text-2xl">{title}</div>
          <div className="text-base">{date}</div>
        </div>
      </div>
      <div className="mt-2 text-gray-500 hover:text-blue-500 cursor-pointer duration-300 ease-in-out">
        <svg viewBox="0 0 20 20" fill="currentColor" className="x w-6 h-6">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

PostHeader.propTypes = {};

export default PostHeader;
