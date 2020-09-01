import React, { useState } from "react";
// import PropTypes from 'prop-types'

// data
import { POST_DATA } from "data/posts.data";
import PostItem from "./PostItem";

const Posts = (props) => {
  const [postData] = useState(POST_DATA);

  return (
    <div className="flex flex-col mx-auto w-full lg:px-20 px-16 py-12">
      {postData.map((post) => (
        <PostItem key={post.id} postData={post} />
      ))}
    </div>
  );
};

Posts.propTypes = {};

export default Posts;
