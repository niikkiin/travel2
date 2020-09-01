import React from "react";
// import PropTypes from 'prop-types'

const PostItem = ({ postData }) => {
  const { postedBy, avatar, businessName, time, title, thumbnail } = postData;
  return (
    <>
      <div className="lg:text-sm text-gray-800 ml-16 text-xs">
        <div className="relative">
          <img
            className="w-16 h-16 rounded-full border border-gray-400 absolute z-0 object-cover"
            style={{ top: "0.5rem", left: "-5rem" }}
            src={avatar}
            alt={postedBy}
          />
          <div
            className="w-3 h-3 bg-green-500 rounded-full absolute inset-0"
            style={{ left: "-5.2rem" }}
          ></div>
        </div>
        Posted by{" "}
        <span className="text-blue-500 hover:text-blue-800 cursor-pointer duration-500 font-medium">
          {postedBy}
        </span>{" "}
        from{" "}
        <span className="text-blue-500 hover:text-blue-800 cursor-pointer duration-500 font-medium">
          {businessName}
        </span>{" "}
        <span className="italic font-medium">{time}</span>
      </div>
      <div className="max-w-full border border-gray-400 mt-2 mb-16 bg-white ">
        <div className="text-gray-800 flex items-center my-4 mx-12 text-xl lg:mx-20 lg:my-8  lg:text-2xl">
          {title}
        </div>

        <img className="object-cover w-full" src={thumbnail} alt={title} />
      </div>
    </>
  );
};

PostItem.propTypes = {};

export default PostItem;
