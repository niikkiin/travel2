import React from "react";
// import PropTypes from 'prop-types'


import PostItem from "./PostItem";

const Posts = ({postData}) => {


  return (
    <div className="flex flex-col mx-auto w-full lg:px-20 px-8 md:px-16 py-12">
      {postData.map((post, i) => (
        <PostItem key={i} postData={post} />
      ))}
    </div>
  );
};

Posts.propTypes = {};

export default Posts;
