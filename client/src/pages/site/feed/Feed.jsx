import React, { useState } from "react";
// import PropTypes from 'prop-types'

// components
import Posts from "components/post/Posts";
import CreatePost from "components/create/CreatePost";

// data
import { POST_DATA } from "data/posts.data";

const Feed = (props) => {
  const [postData] = useState(POST_DATA);
  return (
    <div className="flex">
      <div className="hidden md:block w-2/4"></div>
      <div className="w-full relative">
        <div className=" px-4 pt-4 pb-2 mx-8 text-3xl text-blue-500">
          Main Feed
        </div>
        <CreatePost />
        {/* <div className="text-3xl text-blue-500 font-medium mt-8 ml-8">Main Feed</div> */}
        <Posts  postData={postData} />
      </div>
    </div>
  );
};

Feed.propTypes = {};

export default Feed;
